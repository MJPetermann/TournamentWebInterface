<template>
    <div>
        <va-navbar color="backgroundElement" class="mb-3">
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
                    <va-button> Meine Matches </va-button>
                </va-navbar-item>
            </template>
        </va-navbar>
        <slot />
    </div>
</template>