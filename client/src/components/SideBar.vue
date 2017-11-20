<template>
  <div class="wrapper">

        <nav id="sidebar">
            <!-- Close Sidebar Button -->
            <div id="dismiss" @click="closeSideBar()">
                <i class="glyphicon glyphicon-arrow-left"></i>
            </div>

            <!-- Sidebar Header -->
            <div class="sidebar-header">
                <h3>Collapsible Sidebar</h3></div>

            <!-- Sidebar Links -->
            <ul class="list-unstyled components">
                <li class="active"><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><!-- Link with dropdown items -->
                    <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false">Pages</a>
                    <ul class="collapse list-unstyled" id="homeSubmenu">
                        <li><a href="#">Page</a></li>
                        <li><a href="#">Page</a></li>
                        <li><a href="#">Page</a></li>
                    </ul>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>

        <div id="content">
            <button type="button" id="sidebarCollapse" class="btn btn-info navbar-btn" @click="openSideBar()">
                <i class="glyphicon glyphicon-align-left"></i>
                Toggle Sidebar
            </button>
        </div>

        <div class="overlay"></div>
</div>
</template>

<script>
import sidebar from '@/assets/sidebar'
export default {
  components: {
    sidebar
  }
}
</script>

<style scoped>
.wrapper {
    display: block;
}

#sidebar {
    min-width: 250px;
    max-width: 250px;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    /* top layer */
    z-index: 9999;
}

.overlay {
    /* full screen */
    width: 100vw;
    height: 100vh;
    /* transparent black */
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    top: 0;
    left: 0;
    display: none;
    /* middle layer, i.e. appears below the sidebar */
    z-index: 9998;
}

#dismiss {
    width: 35px;
    height: 35px;
    position: absolute;
    /* top right corner of the sidebar */
    top: 10px;
    right: 10px;
}
</style>
