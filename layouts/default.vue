<template>
    <div>
        <va-navbar color="primary">
            <template #left>
                <va-navbar-item class="logo">
                    <nuxt-img src="/pictures/LEZLogo.png" height="50px" />
                </va-navbar-item>
                <va-navbar-item>
                    <va-button> Home </va-button>
                </va-navbar-item>
                <va-navbar-item>
                    <va-button> Bracket </va-button>
                </va-navbar-item>
                <va-navbar-item>
                    <va-button> Stats </va-button>
                </va-navbar-item>
            </template>
            <template #right>
                <va-navbar-item>
                    <va-button> Log In </va-button>
                </va-navbar-item>
            </template>
        </va-navbar>
        <div style="display:flex">
            <layoutSideBar />
            <slot />
        </div>
    </div>
</template>