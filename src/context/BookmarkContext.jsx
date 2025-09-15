import { createContext, useEffect, useState } from "react";
// 1. create bookmark context
const BookmarkContext = createContext();
export const BookmarkProvider = ({ children }) => {
  // 3. create a bookmark store
  const [bookmarks, setBookmarks] = useState([]);
  useEffect(() => {
    // 4. save bookmark in local & check previous store
    const storedBookmarks = localStorage.getItem("bookmarks");
    if (storedBookmarks) {
      setBookmarks(JSON.parse(storedBookmarks));
    }
  }, []);
// 5. add bookmark
const addToBookmark = (product) => { 
  //6. make a new bookmark store 
  const updatedBookmarks = [...bookmarks,product]
  setBookmarks(updatedBookmarks)
  localStorage.setItem("bookmarks",JSON.stringify(updatedBookmarks))
 }
//7. remove from bookmarks by product id
const removeFromBookmarks = (productId) => { 
  const updatedBookmarks = bookmarks.filter(item => item.id !== productId)
  setBookmarks(updatedBookmarks)
  localStorage.setItem("bookmarks",JSON.stringify(updatedBookmarks))
 }
 //8. check bookmarked product is exist
 const isBookmarked = (productId) => { 
  
  }
  return (
    // 2. provide the context
    <BookmarkContext.Provider>{children}</BookmarkContext.Provider>
  );
};
