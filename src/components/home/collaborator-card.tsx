import { Collaborator } from '@/config/home';
import { UnderlineText } from '../common/ui/underline-text';

export function CollaboratorCard({
  collaborator,
}: {
  collaborator: Collaborator;
}) {
  return (
    <div className="flex flex-col items-start justify-center pt-4 md:p-4">
      <h6 className="relative w-full border-border text-sm">
        {collaborator.org}
      </h6>
      {collaborator.people.map((person) => (
        <UnderlineText className="cursor-default">
          <span className="self-start text-sm text-muted-foreground">
            {person.name}
          </span>
        </UnderlineText>
      ))}
    </div>
  );
}
