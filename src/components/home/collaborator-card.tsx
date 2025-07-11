import { Collaborator } from '@/config/home';
import { Card, CardContent } from '../common/ui/card';

export function CollaboratorCard({
  collaborator,
}: {
  collaborator: Collaborator;
}) {
  return (
    <Card className="group w-64 flex-shrink-0 border-none bg-transparent shadow-none transition-all duration-300 hover:shadow-none">
      <CardContent className="flex flex-col justify-between p-6 text-center">
        <div className="relative mb-4">
          <img
            src={collaborator.image || '/placeholder.svg'}
            alt={collaborator.name}
            width={80}
            height={80}
            className="mx-auto rounded transition-transform group-hover:scale-105"
          />
        </div>
        <div>
          <h3 className="mb-1 font-semibold text-accent-foreground">
            {collaborator.name}
          </h3>
        </div>
      </CardContent>
    </Card>
  );
}
