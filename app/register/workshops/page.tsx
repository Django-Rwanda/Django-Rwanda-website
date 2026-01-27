import { Card } from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";
import { Check } from "lucide-react";

export const metadata = {
  title: "Workshop Registration | Django Rwanda",
  description: "Register for Django workshops",
};

export default function WorkshopRegistrationPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="mx-auto w-full max-w-2xl px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-foreground">
            Workshop Registration
          </h1>
          <p className="mt-2 text-foreground/60">
            Secure your spot in our next workshop
          </p>
        </div>

        <Card className="border border-border/50 p-8">
          <form className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  className="w-full rounded-lg border border-border bg-input px-4 py-2 text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  className="w-full rounded-lg border border-border bg-input px-4 py-2 text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-foreground">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full rounded-lg border border-border bg-input px-4 py-2 text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-foreground">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full rounded-lg border border-border bg-input px-4 py-2 text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label
                htmlFor="workshop-select"
                className="mb-2 block text-sm font-medium text-foreground"
              >
                Select Workshop
              </label>
              <select
                id="workshop-select"
                className="w-full rounded-lg border border-border bg-input px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option>Choose a workshop</option>
                <option>Django Fundamentals</option>
                <option>Advanced Django Patterns</option>
                <option>Building APIs with Django REST</option>
                <option>Full-Stack Django & React</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-foreground">
                Experience Level
              </label>
              <div className="space-y-2">
                {["Beginner", "Intermediate", "Advanced"].map((level) => (
                  <label
                    key={level}
                    className="flex items-center gap-2 text-foreground/60"
                  >
                    <input
                      type="radio"
                      name="experience"
                      className="rounded border border-border"
                    />
                    {level}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-foreground">
                Additional Comments
              </label>
              <textarea
                rows={4}
                className="w-full rounded-lg border border-border bg-input px-4 py-2 text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Tell us why you're interested in this workshop..."
              />
            </div>

            <label className="flex items-center gap-2 text-sm text-foreground/60">
              <input type="checkbox" className="rounded border border-border" />
              <span>
                I agree to receive updates and notifications about the workshop
              </span>
            </label>

            <Button variant="gradient" className="w-full py-3">
              Complete Registration
              <Check className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
}
