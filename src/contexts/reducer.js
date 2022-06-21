import react from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case "UPDATE_USER_DATA":
            const user_data = { ...state.user_data, ...action.user_data };

            localStorage.setItem("user_data", JSON.stringify(user_data));

            return {
                ...state,

                user_data: user_data,
            };

        default:
            return state;
    }
};

export default reducer;
