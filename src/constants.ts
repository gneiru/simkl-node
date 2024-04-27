export const defaultError = {
  error: "FetchError",
  message: "Something went wrong while fetching.",
};

export type ErrorResponse = {
  error: string;
  message: string;
};
