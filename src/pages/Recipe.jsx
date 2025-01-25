import ReactMarkdown from "react-markdown";

const Recipe = ({ recipe }) => {
  return (
    <section className="bg-[#f0efeb] px-2.5 py-7 " aria-live="polite">
      <h2 className="my-4 text-2xl font-medium">
        Chef Claude recommended recipe:
      </h2>
      <article className="flex flex-col justify-between rounded-lg  space-y-4 text-sm">
        <ReactMarkdown>{recipe}</ReactMarkdown>
      </article>
    </section>
  );
};

export default Recipe;
