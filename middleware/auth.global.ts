export default defineNuxtRouteMiddleware((to, from) => {

    const isAuthenticated = useAuth().isAuthenticated();

    if (!isAuthenticated && to.path != "/login" && to.path != "/resetPassword") {
        // return navigateTo("/login");
    }
    if (to.path == "/login" && isAuthenticated) {
        return navigateTo("/");
    }

    navigateTo(to.path);
});
