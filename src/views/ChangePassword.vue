<template>
    <v-card elevation="0" class="w-25 mx-auto custom_card">
        <v-card-text>
            <v-card-title class="d-flex align-center justify-center">
                Change Password
            </v-card-title>
            <v-form>
                <v-text-field label="Enter your password" name="previousPass" type="password"
                    class="rounded-0" outlined></v-text-field>
                <v-text-field label="Enter your new password" name="password" type="password" class="rounded-0" outlined/>
                <v-text-field label="Repeat your new password" name="password" type="password" class="rounded-0" outlined/>
                <v-btn class="rounded-lg" color="primary" variant="tonal" x-large block dark>Change password</v-btn>
                <br/>
                <RouterLink to="#" class="d-flex align-center justify-center terms-link">
                    Forgot your password?
                </RouterLink>
            </v-form>
        </v-card-text>
    </v-card>
</template>
  
<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

</script>
  
<style scoped>
.terms-link {
    color: #1976D2;
    /* Change to your desired link color */
    text-decoration: none;
    margin: 0 5px;
    /* Adjust the spacing between links */
}

.terms-link:hover {
    text-decoration: underline;
    /* Underline the link on hover */
}

.custom_card {
    min-width: 400px;
}
</style>
  In this version, the d-flex, align-center, justify-center, and flex-wrap classes have been applied to v-card-actions. These classes use flexbox properties to align the content both vertically and horizontally and wrap the elements properly. The "Sign Up" button and the checkbox should now be horizontally centered. Adjust the styles as needed to achieve your desired layout.
  
  