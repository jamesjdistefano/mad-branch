<template>
    <div class="home">
        <nav>
            <div><img src="../../static/images/mark.svg" width=64 /></div>
            <div>Navigation</div>
        </nav>
        <slot />
    </div>
</template>


<style scoped lang="scss">
    nav {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 2rem; 
    }
</style>