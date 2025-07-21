import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router';

import { Blog } from '@/config/home';
import { cn, formatDate } from '@/lib/utils';
import { Badge } from '../common/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../common/ui/card';

interface BlogCardProps {
  clamp?: boolean;
  className?: string;
  blog: Blog;
}

export function BlogCard({ clamp = false, className, blog }: BlogCardProps) {
  const isExternalLink = blog.link.startsWith('http');
  const card = (
    <Card className="group h-full rounded shadow-none transition-all duration-300 hover:border-foreground hover:shadow-md dark:shadow-none dark:hover:border-active">
      <CardHeader>
        <div className="mb-2 flex items-center justify-between">
          <Badge
            variant="outline"
            className="group-hover:border-foreground group-hover:text-foreground dark:group-hover:border-active/50 dark:group-hover:text-active"
          >
            {blog.category}
          </Badge>
          <span className="text-sm text-muted-foreground">
            {formatDate(blog.date)}
          </span>
        </div>
        <CardTitle className="text-lg transition-colors group-hover:text-foreground dark:group-hover:text-active">
          {blog.title}
        </CardTitle>
        <CardDescription
          className={cn(
            'text-sm leading-relaxed text-muted-foreground',
            clamp && 'line-clamp-3',
          )}
        >
          {blog.abstract}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex justify-end">
        <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground dark:group-hover:text-active" />
      </CardContent>
    </Card>
  );
  return isExternalLink ? (
    <a
      href={blog.link}
      className={cn('w-full flex-shrink-0 cursor-pointer', className)}
    >
      {card}
    </a>
  ) : (
    <Link
      to={blog.link}
      className={cn('w-full flex-shrink-0 cursor-pointer', className)}
    >
      {card}
    </Link>
  );
}
