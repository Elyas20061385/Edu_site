import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight } from "lucide-react";

interface SignupDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  courseName?: string;
}

const SignupDialog = ({ open, onOpenChange, courseName }: SignupDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-background border-border">
        <DialogHeader>
          <DialogTitle className="font-display text-xl font-bold text-foreground">
            {courseName ? "Enroll Now" : "Get Started"}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {courseName
              ? `Sign up to enroll in "${courseName}"`
              : "Create your free account and start learning today."}
          </DialogDescription>
        </DialogHeader>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            onOpenChange(false);
          }}
          className="flex flex-col gap-4 mt-2"
        >
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" placeholder="John Doe" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="you@example.com" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="••••••••" required />
          </div>
          <Button type="submit" variant="hero" className="w-full mt-2">
            {courseName ? "Enroll" : "Create Account"}
            <ArrowRight className="w-4 h-4" />
          </Button>
          <p className="text-xs text-muted-foreground text-center">
            By signing up, you agree to our Terms & Privacy Policy.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default SignupDialog;
