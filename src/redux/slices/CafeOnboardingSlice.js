import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    OnboardingAstheticVibeType: true,
    OnboardingComfortEnvirmentType: true,
    OnboardingCafeeFoodType: true,
    OnboardingWorkabilityType: true,
    OnboardingAccessibilityValueType: true,
}

const CafeOnboardingSlice = createSlice({
    name: "CafeOnboarding",
    initialState,
    reducers: {
        dispatchOnboardingAsthetice: (state, action) => {
            state.OnboardingAstheticVibeType = action.payload;
        },
        dispatchOnboardingComfortEnvirment: (state, action) => {
            state.OnboardingComfortEnvirmentType = action.payload;
        },
        dispatchOnboardingCafeeFood: (state, action) => {
            state.OnboardingCafeeFoodType = action.payload;
        },
        dispatchOnboardingWorkability: (state, action) => {
            state.OnboardingWorkabilityType = action.payload;
        },
        dispatchOnboardingAccessibilityValue: (state, action) => {
            state.OnboardingAccessibilityValueType = action.payload;
        },
    }
})

export const {
    dispatchOnboardingAsthetice,
    dispatchOnboardingComfortEnvirment,
    dispatchOnboardingCafeeFood,
    dispatchOnboardingWorkability,
    dispatchOnboardingAccessibilityValue,
} = CafeOnboardingSlice.actions;

export default CafeOnboardingSlice.reducer;