const StarRating = ({ rating }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          fill={index < rating ? "#facc15" : "#d1d5db"} // Yellow for selected, Gray otherwise
          viewBox="0 0 24 24"
          stroke="none"
          className="h-3.5 me-1 my-3"
        >
          <path d="M12 .587l3.668 7.431 8.2 1.191-5.934 5.788L19.8 24 12 19.897 4.2 24l1.866-9.003L.132 9.209l8.2-1.191z" />
        </svg>
      ))}
    </div>
  );
};
export default StarRating