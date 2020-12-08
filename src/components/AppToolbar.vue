<template>
  <div>
    <v-app-bar class="top_toolbar" v-if="showToToolbar">
      <v-spacer></v-spacer>
      <v-toolbar-items class="top_toolbar_items">
        <v-btn text>Save more on app</v-btn>
        <v-btn text>Sell on daraz</v-btn>
        <v-btn text>Customer care</v-btn>
        <v-btn text>track my order</v-btn>
        <v-btn text>
          <router-link to="/login">Login</router-link>
        </v-btn>
        <v-btn text>
          <router-link to="/signup">Signup</router-link>
        </v-btn>
        <v-btn text>Language</v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-card color="grey lighten-4 secondary_card" tile>
      <v-app-bar
        dense
        class="secondary_toolbar"
        v-if="showSecondaryToolbar"
        v-scroll="onScroll"
        :color="!isScrolling ? 'transparent' : 'white'"
        :elevation="!isScrolling ? 0 : 6"
        :style="`margin-top: ${isScrolling ? '0 !important' : '30px !important'}; padding-top: ${isScrolling ? '15px !important' : '0px !important'};`"
        fixed
        flat
      >
        <router-link to="/">
          <v-img src="daraz/logo.png" max-height="41" max-width="135"></v-img>
        </router-link>

        <v-spacer></v-spacer>

        <v-text-field></v-text-field>

        <v-btn icon bg="#F57C00">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <!-- <v-btn>
        <router-link to="/about">About</router-link>
        </v-btn>-->

        <v-icon>shopping_cart</v-icon>

        <v-img src="daraz/android_app_logo.png" max-height="45" max-width="188"></v-img>
      </v-app-bar>
    </v-card>

    <v-app-bar
      class="toolbar_dropdown_menu"
      v-if="showToolbarMenuItem"
      v-scroll="onScroll"
      fixed
      :elevation="!isScrolling ? 0 : 1"
      :style="`margin-top: ${isScrolling ? '75px !important' : '0 !important'}; `"
    >
      <v-toolbar-items class="toolbar_dropdown_menu_items">
        <!-- categories dropdown list -->
        <v-menu offset-y class="dropdown_categories_menu">
          <template v-slot:activator="{ on }">
            <v-btn color="primary" dark v-on="on" text>
              <span>Categories</span>
              <v-icon right>mdi-chevron-down</v-icon>
            </v-btn>
          </template>
          <v-list class="dropdown_categories_menu_item_list">
            <!-- iterate all main menu -->
            <v-list-item
              v-for="(dropdown, index) in categoriesMenuItem"
              :key="index"
              @click="index"
              style="text-align: left"
            >
              <v-list-item-title class="dropdown_categories_menu_item_list_title">
                <v-menu offset-x>
                  <template v-slot:activator="{ on }">
                    <v-btn color="primary" dark v-on="on" text>
                      <span>{{dropdown.title}}</span>
                    </v-btn>
                  </template>
                  <v-list>
                    <!-- iterate the second list -->
                    <v-list-item
                      v-for="(dropdown2, index2) in dropdown.subtitle"
                      :key="index2"
                      @click="index2"
                      style="text-align: left"
                    >
                      <v-list-item-title class="dropdown_categories_menu_item_list_title">
                        <v-menu offset-x>
                          <template v-slot:activator="{ on }">
                            <v-btn color="primary" dark v-on="on" text>
                              <span>{{dropdown2.title}}</span>
                            </v-btn>
                          </template>
                          <v-list>
                            <v-list-item
                              v-for="(listItem, index) in dropdown2.subsubtitle"
                              :key="index"
                              @click="index"
                              style="text-align: left"
                            >
                              <v-list-item-title
                                class="dropdown_categories_menu_item_list_title"
                              >{{ listItem.title }}</v-list-item-title>
                            </v-list-item>
                          </v-list>
                        </v-menu>
                      </v-list-item-title>
                    </v-list-item>
                    <!-- end iterate the second list -->
                  </v-list>
                </v-menu>
              </v-list-item-title>
            </v-list-item>
            <!-- end iterate all main menu -->
          </v-list>
        </v-menu>

        <v-btn text>
          <v-icon left>mdi-arrow-up</v-icon>
          <span>Digital Sheba</span>
        </v-btn>
        <v-btn text>
          <v-icon left>mdi-bookmark</v-icon>dMart
        </v-btn>
        <v-btn text>
          <v-icon left>mdi-bookmark</v-icon>Ramadan Essentials
        </v-btn>
        <v-btn text>
          <v-icon left>mdi-bookmark</v-icon>DarazMall
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
  </div>
</template>


<script>
export default {
  methods: {
    onScroll() {
      const offset = window.pageYOffset;
      this.isScrolling = offset > 50;
      this.showToolbarMenuItem = offset > 50;
    }
  },
  data() {
    return {
      showToToolbar: true,
      showSecondaryToolbar: true,
      isScrolling: false,
      showToolbarMenuItem: false,
      categoriesMenuItem: [
        {
          title: "Electronic Devices",
          subtitle: [
            {
              title: "Mobiles",
              subsubtitle: [
                {
                  title: "Xiaomi Phones"
                },
                {
                  title: "Samsung Phones"
                },
                {
                  title: "Nokia Phones"
                },
                {
                  title: "Realme Phones"
                },
                {
                  title: "Huawai Phones"
                },
                {
                  title: "Motorola Phones"
                },
                {
                  title: "Vivo Phones"
                },
                {
                  title: "Oppo Phones"
                }
              ]
            },
            {
              title: "Tablets"
            },
            {
              title: "Laptops",
              subsubtitle: [
                {
                  title: "Laptops & Notebooks"
                },
                {
                  title: "Gaming Laptops"
                },
                {
                  title: "Macbooks"
                }
              ]
            },
            {
              title: "Desktops",
              subsubtitle: [
                {
                  title: "All in one"
                },
                {
                  title: "Gaming Laptops"
                }
              ]
            }
          ]
        },
        {
          title: "Electronic Accessories",
          subtitle: [
            {
              title: "Audio",
              subsubtitle: [
                {
                  title: "Audio1"
                },
                {
                  title: "Audio 2"
                }
              ]
            },
            {
              title: "Wearable",
              subsubtitle: [
                {
                  title: "Smart watch"
                },
                {
                  title: "Virtual Reality"
                }
              ]
            }
          ]
        },
        {
          title: "TV & Home Appliances",
          subtitle: [
            {
              title: "Televisions",
              subsubtitle: [
                {
                  title: "Smart TV"
                },
                {
                  title: "LED TV"
                }
              ]
            },
            {
              title: "Home Audio",
              subsubtitle: [
                {
                  title: "Soundbars"
                },
                {
                  title: "Home Entertainment"
                }
              ]
            }
          ]
        },
        {
          title: "Health & Beauty",
          subtitle: [
            {
              title: "Bath & Body",
              subsubtitle: [
                {
                  title: "Smart TV"
                },
                {
                  title: "LED TV"
                }
              ]
            },
            {
              title: "Beauty Tools",
              subsubtitle: [
                {
                  title: "Soundbars"
                },
                {
                  title: "Home Entertainment"
                }
              ]
            }
          ]
        },
        {
          title: "Babies & Toys",
          subtitle: [
            {
              title: "Bath & Body",
              subsubtitle: [
                {
                  title: "Smart TV"
                },
                {
                  title: "LED TV"
                }
              ]
            },
            {
              title: "Beauty Tools",
              subsubtitle: [
                {
                  title: "Soundbars"
                },
                {
                  title: "Home Entertainment"
                }
              ]
            }
          ]
        },
        {
          title: "Home & Lifestyle",
          subtitle: [
            {
              title: "Bath & Body",
              subsubtitle: [
                {
                  title: "Smart TV"
                },
                {
                  title: "LED TV"
                }
              ]
            },
            {
              title: "Beauty Tools",
              subsubtitle: [
                {
                  title: "Soundbars"
                },
                {
                  title: "Home Entertainment"
                }
              ]
            }
          ]
        },
        {
          title: "Women's Fashion",
          subtitle: [
            {
              title: "Bath & Body",
              subsubtitle: [
                {
                  title: "Smart TV"
                },
                {
                  title: "LED TV"
                }
              ]
            },
            {
              title: "Beauty Tools",
              subsubtitle: [
                {
                  title: "Soundbars"
                },
                {
                  title: "Home Entertainment"
                }
              ]
            }
          ]
        }
      ],
      model: 1
    };
  }
};
</script>

<style scoped>
.top_toolbar {
  background-color: rgba(255, 255, 255, 0.2) !important;
  height: 25px !important;
}

.top_toolbar_items > .v-btn {
  margin-top: -20px !important;
  font-size: 10px;
  text-decoration: none;
  text-transform: uppercase;
  font-family: Roboto-Regular, "Helvetica Neue", Helvetica, Tahoma, Arial,
    Sans-serif;
}

.top_toolbar_items > .v-btn:hover {
  color: #f36f36 !important;
  transition: color 0.2s;
  text-decoration: underline;
}

.secondary_card {
  height: 75px;
}
.secondary_toolbar {
  height: 75px !important;
  padding: 0 90px !important;
}

/* dropdown menu */

.toolbar_dropdown_menu {
  background-color: #fff !important;
  height: 40px !important;
  padding: 0 90px;
}

.toolbar_dropdown_menu_items > .v-btn {
  margin-top: -20px !important;
  font-size: 12px;
  text-decoration: none;
  text-transform: uppercase;
  font-family: Roboto-Regular, "Helvetica Neue", Helvetica, Tahoma, Arial,
    Sans-serif;
}
</style>