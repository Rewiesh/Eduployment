<!-- <script lang="ts">
    import { auth } from '$lib/firebase'; // Make sure you have the Firebase setup as described earlier
    import { signInWithEmailAndPassword } from "firebase/auth";
    import { onMount } from 'svelte';

    let email = '';
    let password = '';
    let error = '';
    let loading = false;

    const handleLogin = async () => {
        error = ''; // Reset error message
        loading = true; // Start loading state

        try {
            await signInWithEmailAndPassword(auth, email, password);
            // Redirect or show success message
            console.log('Login successful');
            // For example: navigate to the dashboard or homepage
        } catch (err) {
            error = err.message; // Capture any errors
        } finally {
            loading = false; // End loading state
        }
    };
</script> -->

<style>
    .login-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 400px;
        margin: auto;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }

    .error {
        color: red;
    }

    button {
        margin-top: 10px;
    }
</style>

<div class="login-container">
    <h2>Login</h2>
    <input type="email" placeholder="Email" required /> 
    <input type="password" placeholder="Password" required />
    <button>Login</button>
</div>
