
const defaultSubmit = (e) => {
  e.preventDefault();
};
export const Form = (({ children, onSubmit }) => {

  return <form onSubmit={onSubmit || defaultSubmit}>{children}</form>;
})