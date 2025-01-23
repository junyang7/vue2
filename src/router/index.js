const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

const routes = [
    {
        path: "/",
        component: () => import("@/page/Index"),
    },
]

const router = new VueRouter({
    // mode: "history",
    routes
})

export default router
