"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Zod
import { designPitchInterestSchema } from "@/lib/validation/design-pitch-interest";

type SubmitInterestModalProps = {
  open: boolean;
  onClose: () => void;
};

type FormErrors = Partial<
  Record<"name" | "email" | "phone" | "organization" | "form", string>
>;

type InputProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  error?: string;
};

function Input({ label, value, onChange, type = "text", error }: InputProps) {
  return (
    <div>
      <label
        className="mb-1 block text-[12px] font-semibold uppercase tracking-wide text-[#08273B]"
        style={{ fontFamily: "Google Sans" }}
      >
        {label}
      </label>

      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full rounded-xl border-2 bg-white px-4 py-2.5 text-[15px] outline-none transition-all ${
          error
            ? "border-[#B43A0B] focus:ring-4 focus:ring-[#B43A0B]/15"
            : "border-[#08273B] focus:border-[#E8B455] focus:ring-4 focus:ring-[#E8B455]/20"
        }`}
        style={{ fontFamily: "Google Sans" }}
      />

      {error && (
        <p
          className="mt-1 text-[11px] text-[#B43A0B]"
          style={{ fontFamily: "Google Sans" }}
        >
          {error}
        </p>
      )}
    </div>
  );
}

export default function SubmitInterestModal({
  open,
  onClose,
}: SubmitInterestModalProps) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
  });

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [open, onClose]);

  function handleClose() {
    onClose();

    setTimeout(() => {
      setSuccess(false);
      setErrors({});
      setLoading(false);
    }, 300);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setErrors({});

    const parsed = designPitchInterestSchema.safeParse(form);

    if (!parsed.success) {
      const validationErrors: FormErrors = {};

      parsed.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof FormErrors;

        if (field && !validationErrors[field]) {
          validationErrors[field] = issue.message;
        }
      });

      setErrors(validationErrors);

      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/design-pitch-interest", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(parsed.data),
      });

      const data = await res.json();

      if (!res.ok) {
        const apiErrors: FormErrors = {};

        data.errors?.forEach((error: { path: string[]; message: string }) => {
          const field = error.path[0] as keyof FormErrors;

          if (field) {
            apiErrors[field] = error.message;
          } else {
            apiErrors.form = error.message;
          }
        });

        setErrors(
          Object.keys(apiErrors).length
            ? apiErrors
            : {
                form: "Something went wrong. Please try again.",
              },
        );

        return;
      }

      setSuccess(true);

      setForm({
        name: "",
        email: "",
        phone: "",
        organization: "",
      });
    } catch {
      setErrors({
        form: "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm"
          />

          {/* Modal */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.94,
              y: 25,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.97,
              y: 20,
            }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
            className="fixed left-1/2 top-1/2 z-[101] w-[92%] max-w-[500px] -translate-x-1/2 -translate-y-1/2 z-999"
          >
            <div className="relative rounded-[24px] border-[3px] border-[#08273B] bg-[#FCF8F0] px-7 py-6 shadow-[8px_8px_0px_#08273B]">
              {/* Close */}

              <button
                type="button"
                onClick={handleClose}
                className="absolute right-5 top-4 z-10 cursor-pointer text-2xl text-[#08273B] transition-transform duration-300 hover:rotate-90"
              >
                ×
              </button>

              <AnimatePresence mode="wait">
                {!success ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{
                      opacity: 0,
                      y: -15,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                  >
                    {/* Heading */}

                    <h2
                      className="text-center text-[30px] leading-none text-[#08273B]"
                      style={{ fontFamily: "Shrikhand" }}
                    >
                      Submit Your Interest
                    </h2>

                    <p
                      className="mx-auto mt-2 max-w-[300px] text-center text-[14px] leading-[1.45] text-[#08273B]"
                      style={{ fontFamily: "Google Sans" }}
                    >
                      Leave your details and we'll notify you when submissions
                      open.
                    </p>

                    {/* Form */}

                    <form onSubmit={handleSubmit} className="mt-6 space-y-3">
                      <Input
                        label="Name"
                        value={form.name}
                        error={errors.name}
                        onChange={(value) =>
                          setForm({
                            ...form,
                            name: value,
                          })
                        }
                      />

                      <div className="grid grid-cols-2 gap-3">
                        <Input
                          label="Email"
                          type="email"
                          value={form.email}
                          error={errors.email}
                          onChange={(value) =>
                            setForm({
                              ...form,
                              email: value,
                            })
                          }
                        />

                        <Input
                          label="Phone"
                          value={form.phone}
                          error={errors.phone}
                          onChange={(value) =>
                            setForm({
                              ...form,
                              phone: value,
                            })
                          }
                        />
                      </div>

                      <Input
                        label="Current Designation / Organization"
                        value={form.organization}
                        error={errors.organization}
                        onChange={(value) =>
                          setForm({
                            ...form,
                            organization: value,
                          })
                        }
                      />

                      {errors.form && (
                        <p
                          className="text-center text-[13px] text-[#B43A0B]"
                          style={{ fontFamily: "Google Sans" }}
                        >
                          {errors.form}
                        </p>
                      )}

                      <motion.button
                        whileHover={{
                          y: -3,
                          boxShadow: "0px 8px 0px #E8B455",
                        }}
                        whileTap={{
                          y: 2,
                          boxShadow: "0px 2px 0px #E8B455",
                        }}
                        disabled={loading}
                        type="submit"
                        className="mt-5 w-full cursor-pointer rounded-full bg-black px-8 py-3 text-[22px] text-white disabled:cursor-not-allowed disabled:opacity-60"
                        style={{
                          fontFamily: "Shrikhand",
                          boxShadow: "0px 5px 0px #E8B455",
                        }}
                      >
                        {loading ? "Submitting..." : "Submit Interest"}
                      </motion.button>

                      <p
                        className="text-center text-[11px] leading-relaxed text-[#666]"
                        style={{ fontFamily: "Google Sans" }}
                      >
                        We'll only use your information to notify you when
                        submissions open.
                      </p>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                      y: 20,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 180,
                      damping: 18,
                    }}
                    className="flex min-h-[340px] flex-col items-center justify-center px-4 text-center"
                  >
                    {/* Success Icon */}

                    <motion.div
                      initial={{
                        scale: 0,
                        rotate: -20,
                      }}
                      animate={{
                        scale: 1,
                        rotate: 0,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 220,
                        damping: 14,
                        delay: 0.1,
                      }}
                      className="flex h-[72px] w-[72px] items-center justify-center rounded-full bg-[#E8B455] text-[36px] text-[#08273B]"
                    >
                      ✓
                    </motion.div>

                    <h2
                      className="mt-6 text-[34px] leading-none text-[#08273B]"
                      style={{ fontFamily: "Shrikhand" }}
                    >
                      You're on the list!
                    </h2>

                    <p
                      className="mt-4 max-w-[340px] text-[15px] leading-[1.5] text-[#08273B]"
                      style={{ fontFamily: "Google Sans" }}
                    >
                      Thanks for your interest in Design Pitch. We'll let you
                      know as soon as submissions open.
                    </p>

                    <motion.button
                      type="button"
                      onClick={handleClose}
                      whileHover={{
                        y: -3,
                        boxShadow: "0px 8px 0px #E8B455",
                      }}
                      whileTap={{
                        y: 2,
                        boxShadow: "0px 2px 0px #E8B455",
                      }}
                      className="mt-7 w-full max-w-[240px] cursor-pointer rounded-full bg-black px-8 py-3 text-[20px] text-white"
                      style={{
                        fontFamily: "Shrikhand",
                        boxShadow: "0px 5px 0px #E8B455",
                      }}
                    >
                      Close
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
