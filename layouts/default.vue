<template>
    <div style="background-color: var(--va-background-primary);">
        <va-navbar color="primary" style="flex-wrap: nowrap;">
            <template #left>
                <va-navbar-item class="logo" style="width: 217.6px;display: flex; justify-content: center;">
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
        <div style="display:flex;align-items: stretch;flex-direction: row;">
            <layoutSideBar style=""/>
            <slot />
        </div>
    </div>
</template>

