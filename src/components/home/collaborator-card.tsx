import { Collaborator } from '@/config/home';

export function CollaboratorCard({
  collaborator,
}: {
  collaborator: Collaborator;
}) {
  return (
    <div className="group w-64 flex-shrink-0 bg-card/50 backdrop-blur-sm transition-all duration-300">
      <div className="flex flex-col justify-between p-6 text-center">
        <div className="relative mb-4">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-1 border-primary/20 bg-accent transition-all duration-300 group-hover:scale-110 group-hover:border-primary/40 dark:group-hover:border-active">
            <span className="text-lg font-bold text-primary">
              {collaborator.name
                .split(' ')
                .map((name) => name[0])
                .join('')
                .slice(0, 2)}
            </span>
          </div>
        </div>
        <div>
          <h3 className="mb-1 font-semibold text-foreground transition-colors group-hover:text-primary">
            {collaborator.name}
          </h3>
          <p className="text-sm text-muted-foreground transition-colors group-hover:text-foreground">
            {collaborator.org}
          </p>
        </div>
      </div>
    </div>
  );
}
