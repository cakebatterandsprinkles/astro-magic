import type { Post } from "../pages/journal/index.astro";
import createSlug from "../utils/createSlug";
import { tagStyles } from "../utils/tagStyles";
import "./JournalCard.css";

export const JournalCard = ({ post }: { post: Post }) => {
  return (
    <a href={`/journal/${createSlug(post.title)}`}>
      <div className="card">
        <div className="dateAndTitleContainer">
          <p className="articleTitle">{post.title}</p>
          <p className="articleDate">{post.date}</p>
        </div>
        <div className="summaryContainer">
          <p>{post.summary}</p>
        </div>
        <div className="tagAndContributorContainer">
          <div className='tagContainer"'>
            {/* Tag icon here*/}
            <div className="tagWrapper">
              {post.tags
                ? post.tags.map((tag: string) => {
                    return (
                      <p
                        className={
                          tagStyles[tag]
                            ? `${tagStyles[tag]} tag`
                            : `${tagStyles["default"]} tag`
                        }
                        key={tag}
                      >
                        {tag}
                      </p>
                    );
                  })
                : null}
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};
