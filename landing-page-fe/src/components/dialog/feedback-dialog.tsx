import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import ExternalService from "@/services/external-service";
import { Textarea } from "../ui/textarea";
import { useState } from "react";
import { RatingComponent } from "../rating-component/rating-component";

export const FeedbackDialog = () => {
  const [enteredFeedback, setEnteredFeedback] = useState<string>("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [rating, setRating] = useState(0);

  const getRating = (value: number) => {
    setRating(value);
  };

  const feedbackEntered = (e: any) => {
    setEnteredFeedback(e.target.value);
  };

  const sendFeedback = async () => {
    ExternalService.SubmitFeedback({
      createdAt: new Date(),
      feedback: enteredFeedback,
      rating: rating,
    });

    onOpenChange();
  };

  const onOpenChange = () => {
    setRating(0);
    setIsDialogOpen(!isDialogOpen);
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button variant="outline" className="cursor-pointer">
          How did you find this Landing Page?
        </Button>
      </DialogTrigger>
      <DialogContent className="light:bg-white dark:bg-gray-900 rounded-2xl shadow-xl">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            Your Feedback
          </DialogTitle>
        </DialogHeader>

        <div>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            <Textarea
              placeholder="Your suggestions"
              onChange={(e) => feedbackEntered(e)}
            />
          </p>
        </div>
        <div className="flex flex-row">
          <RatingComponent value={rating} onChange={getRating} />
        </div>

        <div className="flex justify-end gap-2">
          <Button
            className="cursor-pointer"
            disabled={enteredFeedback === "" || rating == 0}
            onClick={sendFeedback}
          >
            Send me!
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
