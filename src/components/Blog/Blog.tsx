import React, { useEffect, useRef, useState } from "react";
import "./Blog.css";
import type { Post } from "../../pages/journal/index.astro";
import { tagStyles } from "../../utils/tagStyles";
import Pagination from "../Pagination/Pagination";
import { JournalCard } from "../../layouts/JournalCard";
import SearchIcon from "../../assets/icons/stash--search-duotone.svg";
import WandIcon from "../../assets/icons/mingcute--magic-1-line.svg";
import ClearIcon from "../../assets/icons/mingcute--close-line.svg";

const Blog = ({ posts }: { posts: Post[] }) => {
  const allSortedPosts = posts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .map((post) => post);

  const searchInput = useRef<HTMLInputElement>(null);
  const clearIcon = useRef<HTMLInputElement>(null);
  const [searchText, setSearchText] = useState<string>("");
  const [isVisible, setIsVisible] = useState(false);
  const [tags, setTags] = useState<string[]>([]);
  const [years, setYears] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [allContributors, setAllContributors] = useState({});
  const blogContainerRef = useRef<HTMLDivElement>(null);

  const pageSize = 10;

  const [filteredPosts, setFilteredPosts] = useState(allSortedPosts);

  const searchResults = () => {
    return searchText.length === 0
      ? filteredPosts
      : filteredPosts.filter(
          (post: Post) =>
            post.title.toLowerCase().includes(searchText) ||
            post.summary.toLowerCase().includes(searchText)
        );
  };

  const pageCount = Math.ceil(filteredPosts.length / pageSize);

  const setCurrentTags = React.useCallback(() => {
    let allTags = posts.flatMap((post: Post) => post.tags);
    console.log({ allTags });
    const currentTags = new Set(allTags);
    setTags(Array.from(currentTags));
  }, [posts]);

  const setAvailableYears = React.useCallback(() => {
    let allYears = posts.flatMap((post) => {
      if (post.date) {
        return post.date.slice(0, 4);
      }
      return [];
    });
    const availableYears = new Set(allYears);
    setYears(Array.from(availableYears).sort());
  }, [posts]);

  const fetchContributors = (posts: Post[]) => {
    const contributors = [
      ...new Set(
        posts.filter((post) => post.contributor).map((post) => post.contributor)
      ),
    ];

    contributors.forEach((contributor) => {
      fetch(`https://api.github.com/users/${contributor}`)
        .then((res) => res.json())
        .then((data) => {
          setAllContributors((oldCont) => ({
            ...oldCont,
            [contributor]: {
              handle: contributor,
              name: data.name,
              avatarURL: data.avatar_url,
              url: data.html_url,
            },
          }));
        });
    });
  };

  useEffect(() => {
    setCurrentTags();
    setAvailableYears();
    fetchContributors(posts);
  }, [posts, setAvailableYears, setCurrentTags]);

  useEffect(() => {
    setFilteredPosts(searchResults());
  }, [searchText]);

  const handleClearClick = () => {
    if (searchInput.current) {
      searchInput.current.value = "";
    }
    setIsVisible(false);
    setSearchText("");
  };

  const handleUserInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (searchInput.current && searchInput.current.value) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }

    if (e.key === "Enter" && searchInput.current) {
      console.log({ posts });
      setSearchText(searchInput.current.value.toLowerCase());
      filterPosts(searchInput.current.value.toLowerCase());
      setCurrentPage(0);
    }
  };

  const getVisibilityClass = () => {
    if (isVisible) {
      return "clearIcon";
    } else {
      return "invisible";
    }
  };

  const filterPosts = (tag: string) => {
    let filteredList: Post[] = [];
    posts.forEach((post) => {
      if (
        post.title?.toLowerCase().includes(tag) ||
        post.tags?.includes(tag) ||
        post.summary?.toLowerCase().includes(tag)
      ) {
        filteredList.push(post);
      }
    });
    setCurrentPage(0);
    setFilteredPosts(filteredList);
    handleClearClick();
    blogContainerRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  const restoreAllArticles = () => {
    setCurrentPage(0);
    setFilteredPosts(allSortedPosts);
    setSearchText("");
    handleClearClick();
  };

  const filterPostsByYear = (year: string) => {
    let filteredList: Post[] = [];
    posts.forEach((post: Post) => {
      if (post.date.slice(0, 4) === year) {
        filteredList.push(post);
      }
    });
    setCurrentPage(0);
    setFilteredPosts(filteredList);
  };

  return (
    <>
      <div className="sidebar">
        <div className="searchWrapper">
          <img src={SearchIcon.src} className="searchIcon" />
          <input
            className="search"
            ref={searchInput}
            type="text"
            onKeyUp={handleUserInput}
            placeholder="Search"
          />
          <img
            src={ClearIcon.src}
            className={getVisibilityClass()}
            onClick={handleClearClick}
            onKeyDown={() => {}}
            aria-hidden="true"
          />
        </div>
        <div className="tagSideContainer">
          <p className="heading">Tags</p>
          <hr></hr>
          <div className="tagSideWrapper">
            {tags.length > 0
              ? tags.map((tag, index) => {
                  return (
                    <span
                      className={
                        tagStyles[tag]
                          ? `${tagStyles[tag]} tag`
                          : `${tagStyles["springgreen"]} tag`
                      }
                      key={index}
                      onClick={() => filterPosts(tag)}
                      onKeyDown={() => {}}
                      aria-hidden="true"
                    >
                      {tag}
                    </span>
                  );
                })
              : "No posts to review!"}
          </div>
          <div
            className="resetContainer"
            onClick={() => restoreAllArticles()}
            onKeyDown={() => {}}
            aria-hidden="true"
          >
            <img src={WandIcon.src} className="wandIcon" />
            <p className="resetText">View all articles</p>
          </div>
          <div className="dateContainerSidebar">
            <p className="heading">Years</p>
            <hr></hr>
            {years.length > 0
              ? years.map((year, index) => {
                  return (
                    <span
                      className="year"
                      key={index}
                      onClick={() => filterPostsByYear(year)}
                      onKeyDown={() => {}}
                      aria-hidden="true"
                    >
                      {year}
                    </span>
                  );
                })
              : "No posts to review!"}
          </div>
        </div>
      </div>
      <div ref={blogContainerRef}>
        {filteredPosts.map((post: Post) => (
          <JournalCard post={post} key={post.title} />
        ))}
      </div>

      {pageCount > 1
        ? Pagination(pageCount, currentPage, setCurrentPage)
        : null}
    </>
  );
};

export default Blog;
