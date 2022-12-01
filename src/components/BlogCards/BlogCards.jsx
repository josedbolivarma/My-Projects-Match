import { dataProjects } from "../../data/projects";
import { BlogCard } from "../BlogCard/BlogCard";

export const BlogCards = () => {
  return (
    <div id="projects" className="w-full min-h-[100vh] my-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {
                dataProjects.map(( item ) => (
                    <BlogCard 
                        key={ item.id }
                        item={ item }
                    />
                ))
            }
        </div>
    </div>
  )
}