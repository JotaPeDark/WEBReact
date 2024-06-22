// components/CardSection.js
const CardSection = ({ title, children }) => {
    return (
      <div>
        <h2>{title}</h2>
        <div>{children}</div>
      </div>
    );
  };
  
  export default CardSection;
  