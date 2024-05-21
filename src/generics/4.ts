type UserProfile = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<UserProfile>): UserProfile {
  const defaulUser: UserProfile = {
    name: "",
    surname: "",
    email: "",
    password: "",
  };
  return { ...defaulUser, ...initialValues };
}

createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});
