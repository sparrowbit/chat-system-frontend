import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const AddChannel = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [channelName, setChannelName] = useState("");
  

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <button
          onClick={() => setIsDialogOpen(true)}
          className="p-2 bg-gray-500/60 rounded-full hover:bg-gray-500/50 cursor-pointer"
        >
          <Plus className="w-5 h-5 text-white " />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] text-white bg-black">
        <DialogHeader>
          <DialogTitle>Add channel</DialogTitle>
          <DialogDescription>
            Create new channel to start chatting with your friends
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right whitespace-nowrap">
              Channel Name
            </Label>
            <Input
              id="name"
              placeholder="Channel Name"
              value={channelName}
              onChange={(e) => setChannelName(e.target.value)}
              className="col-span-3 bg-black text-white"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={() => setIsDialogOpen(false)}>
            Create Channel
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddChannel;
