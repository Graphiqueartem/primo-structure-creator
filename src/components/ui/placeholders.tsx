import { Card, CardContent } from "@/components/ui/card";
import { Image, Play } from "lucide-react";

interface PlaceholderProps {
  className?: string;
  aspectRatio?: "square" | "video" | "wide";
}

export const ImagePlaceholder = ({ className = "", aspectRatio = "video" }: PlaceholderProps) => {
  const aspectClass = aspectRatio === "square" ? "aspect-square" : aspectRatio === "wide" ? "aspect-[2/1]" : "aspect-video";
  
  return (
    <Card className={`overflow-hidden shadow-soft ${className}`}>
      <CardContent className={`p-0 ${aspectClass} bg-muted flex items-center justify-center`}>
        <div className="text-center space-y-2">
          <Image className="h-8 w-8 mx-auto text-muted-foreground" />
          <p className="text-sm font-medium text-muted-foreground">Image Placeholder</p>
        </div>
      </CardContent>
    </Card>
  );
};

export const VideoPlaceholder = ({ className = "", aspectRatio = "video" }: PlaceholderProps) => {
  const aspectClass = aspectRatio === "square" ? "aspect-square" : aspectRatio === "wide" ? "aspect-[2/1]" : "aspect-video";
  
  return (
    <Card className={`overflow-hidden shadow-soft ${className}`}>
      <CardContent className={`p-0 ${aspectClass} bg-muted flex items-center justify-center`}>
        <div className="text-center space-y-2">
          <Play className="h-8 w-8 mx-auto text-muted-foreground" />
          <p className="text-sm font-medium text-muted-foreground">Video Placeholder</p>
        </div>
      </CardContent>
    </Card>
  );
};