import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Lock, ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Sign In | Django Rwanda Community",
  description: "Sign in to your Django Rwanda Community account",
}

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="mx-auto w-full max-w-md px-4">
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent text-primary-foreground font-bold text-lg">
            D
          </div>
          <h1 className="text-3xl font-bold text-foreground">Welcome Back</h1>
          <p className="mt-2 text-foreground/60">Sign in to your Django Rwanda Community account</p>
        </div>

        <Card className="border border-border/50 p-8 bg-gradient-to-br from-background to-muted/50">
          <form className="space-y-4">
            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-medium text-foreground">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-foreground/40" />
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-border bg-input py-2 pl-10 pr-4 text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="mb-2 block text-sm font-medium text-foreground">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-5 w-5 text-foreground/40" />
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full rounded-lg border border-border bg-input py-2 pl-10 pr-4 text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            {/* Remember me & Forgot password */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-foreground/60">
                <input type="checkbox" className="rounded border border-border" />
                Remember me
              </label>
              <Link href="#" className="text-primary hover:text-primary/80">
                Forgot password?
              </Link>
            </div>

            {/* Submit */}
            <Button className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 py-2">
              Sign In
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-4">
            <div className="flex-1 border-t border-border/30" />
            <span className="text-sm text-foreground/40">or</span>
            <div className="flex-1 border-t border-border/30" />
          </div>

          {/* Social Login */}
          <div className="space-y-2">
            <Button variant="outline" className="w-full bg-transparent">
              Continue with Google
            </Button>
            <Button variant="outline" className="w-full bg-transparent">
              Continue with GitHub
            </Button>
          </div>
        </Card>

        {/* Sign up link */}
        <p className="mt-6 text-center text-sm text-foreground/60">
          Don&apos;t have an account?{" "}
          <Link href="/auth/signup" className="font-medium text-primary hover:text-primary/80">
            Sign up here
          </Link>
        </p>
      </div>
    </div>
  )
}
