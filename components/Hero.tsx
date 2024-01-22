// components/Hero.tsx
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const Hero = () => {
  return (
    <div className="relative h-screen p-6">
      <div className="flex justify-center flex-row h-full w-full">
        <div className="flex items-center w-full">
          <div className="flex flex-col items-center w-full gap-2 rounded-lg p-4">
            <h2 className="border-b pb-2 text-3xl font-semibold">
              Julien Furnelle
            </h2>
            <p>CV de Julien Furnelle</p>
            <div className="flex flex-row gap-2 justify-center">
              <Badge>Compétance</Badge>
              <Badge>Etude</Badge>
              <Badge>Projet</Badge>
              <Badge>Contact</Badge>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full items-center">
          <Avatar className="w-56 h-56">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
};

export default Hero;
