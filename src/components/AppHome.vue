<template>
  <div>
    <v-carousel :show-arrows="false" height="344">
      <v-carousel-item v-for="(item,i) in items" :key="i">
        <v-img
          :src="item.src"
          :style="`background-color: ${item.background}`"
          class="carousel_image__image_cover"
        ></v-img>
      </v-carousel-item>
    </v-carousel>

    <!-- <v-card
      class="mx-auto"
      max-width="500"
      style="position: absolute; margin-top: -345px; padding-left: 140px; background-color: transparent"
    >
      <v-list flat>
        <v-list-item-group v-model="model" color="indigo">
          <v-list-item v-for="(item, i) in categoriesMenuItem" :key="i">
            <v-list-item-content>
              <v-list-item-title v-text="item.title" style="text-align: left"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>-->

    <v-card
      class="mx-auto"
      max-width="500"
      style="display:; position: absolute; margin-top: -344px; padding-left: 45px; background-color: transparent; box-shadow: none"
    >
      <v-list class="categoriesMenuItem">
        <v-list-item-group>
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
        </v-list-item-group>
      </v-list>
    </v-card>

    <!--flash sale -->
    <v-container>
      <v-container class="grey lighten-5" style="background-color: #e7e8ec !important">
        <div class="top_card_header">
          <h3 class="top_card_header_title">Flash Sale</h3>
          <a class="top_card_right_header_title">
            <span></span>
            <v-icon color="#1a9cb7"></v-icon>
          </a>
        </div>
        <div style="background-color: #fff">
          <div class="my-2 text-md-right" style="padding-right: 20px;
    padding-top: 10px;">
            <v-btn color="warning" dark outlined>shop more</v-btn>
          </div>
          <v-row no-gutters>
            <template v-for="(product, i) in flashSaleProducts">
              <v-col :key="i">
                <v-card width="188" class="card_outline" outlined>
                  <v-img class="white--text align-end" height="200px" :src="product.photo"></v-img>

                  <v-card-title class="card_product_title text-md-left">{{product.title}}</v-card-title>

                  <v-card-text class="text--primary">
                    <div class="card_price">
                      <span class="currency">৳</span>
                      <span class="price">620</span>
                    </div>
                    <div class="card_original_price">
                      <span class="currency">৳</span>
                      <span class="price">850</span>
                      <span class="discount">-14%</span>
                    </div>
                  </v-card-text>
                </v-card>
              </v-col>
            </template>
          </v-row>
        </div>
      </v-container>

      <!-- categories -->

      <v-container class="grey lighten-5" style="background-color: #e7e8ec !important">
        <div class="top_card_header">
          <h3 class="top_card_header_title">Categories</h3>
          <a class="top_card_right_header_title">
            <span></span>
            <v-icon color="#1a9cb7"></v-icon>
          </a>
        </div>
        <v-row no-gutters>
          <template v-for="(product, i) in categories">
            <v-col :key="i">
              <v-card
                class="card_outline"
                outlined
                height="148"
                width="148"
                style="border-right: 1px solid #e2e2e2 !important;
    border-bottom: 1px solid #e2e2e2 !important; margin-bottom: 2px !important"
              >
                <div class="card-categories-image-container">
                  <v-img :src="product.photo"></v-img>
                </div>
                <div class="card-categories-name">{{product.title}}</div>
              </v-card>
            </v-col>
          </template>
        </v-row>
      </v-container>

      <!-- darazMall -->
      <v-container class="grey lighten-5" style="background-color: #e7e8ec !important">
        <div class="top_card_header">
          <h3 class="top_card_header_title">DarazMall</h3>
          <a class="top_card_right_header_title">
            <span>SHOP MORE</span>
            <v-icon color="#1a9cb7">mdi-chevron-right</v-icon>
          </a>
        </div>
        <v-row no-gutters>
          <template v-for="(product, i) in darazMallProducts">
            <v-col :key="i">
              <v-card class="card_outline" outlined height="100%" width="188">
                <div class="card-official-stores-brand-img">
                  <v-img :src="product.photo"></v-img>
                </div>
                <div class="card-official-stores-h1">{{product.title}}</div>
                <p class="card-official-stores-p">{{product.subtitle}}</p>
              </v-card>
            </v-col>
          </template>
        </v-row>
      </v-container>

      <!-- collections -->
      <v-container class="grey lighten-5" style="background-color: transparent !important">
        <div class="top_card_header">
          <h3 class="top_card_header_title">Collections</h3>
          <a class="top_card_right_header_title">
            <span></span>
            <v-icon color="#1a9cb7"></v-icon>
          </a>
        </div>
        <v-row no-gutters>
          <template v-for="(product, i) in collections">
            <v-col :key="i">
              <v-card
                class="card_outline"
                outlined
                width="297"
                height="146"
                style="border-right: 1px solid #ccc !important;
    border-bottom: 1px solid #ccc !important; margin-bottom: 2px !important; margin-right: 0 !important"
              >
                <div class="card-collections-item">
                  <div class="card-collections-title">{{product.title}}</div>
                  <div class="card-collections-subtitle">{{product.subtitle}}</div>
                  <div class="card-collections-products">
                    <div class="card-collections-product">
                      <div class="image-wrapper">
                        <img class="image" :src="product.photo1" :title="product.title" />
                      </div>
                    </div>

                    <div class="card-collections-product">
                      <div class="image-wrapper">
                        <img class="image" :src="product.photo2" :title="product.title" />
                      </div>
                    </div>

                    <div class="card-collections-product">
                      <div class="image-wrapper">
                        <img class="image" :src="product.photo3" :title="product.title" />
                      </div>
                    </div>
                  </div>
                </div>
              </v-card>
            </v-col>
          </template>
        </v-row>
      </v-container>

      <!-- just for you -->
      <v-container class="grey lighten-5" style="background-color: #e7e8ec !important">
        <div class="top_card_header">
          <h3 class="top_card_header_title">Just for You</h3>
          <a class="top_card_right_header_title">
            <span></span>
            <v-icon color="#1a9cb7"></v-icon>
          </a>
        </div>
        <v-row no-gutters>
          <!-- <template v-for="(product, i) in justForYou"> -->
          <template v-for="postIndex in loadMoreContent">
            <v-col :key="postIndex" v-if="postIndex < justForYou.length">
              <v-card width="188" class="card_outline" outlined>
                <v-img
                  class="white--text align-end"
                  height="200px"
                  :src="justForYou[postIndex].photo"
                  :title="justForYou[postIndex].title"
                ></v-img>

                <v-card-title
                  class="card_product_title text-md-left"
                >{{justForYou[postIndex].title}}</v-card-title>

                <v-card-text class="text--primary">
                  <div class="card_price">
                    <span class="currency">৳</span>
                    <span class="price">620</span>
                  </div>
                  <div class="card_original_price">
                    <span class="currency">৳</span>
                    <span class="price">850</span>
                    <span class="discount">-14%</span>
                  </div>
                  <v-row align="center" class="mx-0">
                    <v-rating :value="4.5" color="amber" dense half-increments readonly size="14"></v-rating>

                    <div class="grey--text">(103)</div>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-col>
          </template>
        </v-row>

        <v-row>
          <v-col>
            <div class="my-2">
              <v-btn large color="primary" dark outlined @click="loadMoreContent +=6">Load More</v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
    <!-- ./ root containter -->
  </div>
</template>


<script>
export default {
  data() {
    return {
      loadMoreContent: 6,
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
      model: 1,
      items: [
        {
          src: "daraz/slides/1.jpg",
          background: "rgb(1, 179, 227)"
        },
        {
          src: "daraz/slides/2.jpg",
          background: "rgb(151, 62, 156)"
        },
        {
          src: "daraz/slides/3.jpg",
          background: "rgb(17, 228, 255)"
        },
        {
          src: "daraz/slides/4.jpg",
          background: "rgb(214, 243, 239)"
        },
        {
          src: "daraz/slides/5.jpg",
          background: "rgb(245, 212, 82)"
        }
      ],

      flashSaleProducts: [
        {
          title:
            "Km-3909 Rechargeable Adult and Children Hair Clippers - Silver and Black",
          photo: "daraz/product/flash_sale1.jpg",
          price: 620,
          originalPrice: 850,
          discount: 14
        },
        {
          title:
            "Kemei KM-590A 7-in-1 Rechargeable Shaver and Trimmers - Black",
          photo: "daraz/product/flash_sale2.jpg",
          price: 620,
          originalPrice: 850,
          discount: 14
        },
        {
          title: "HTC AT-522 Rechargeable Cordless Trimmer For Men (Black)",
          photo: "daraz/product/flash_sale3.jpg",
          price: 620,
          originalPrice: 850,
          discount: 14
        },
        {
          title: "alice acoustic guitar strings A206",
          photo: "daraz/product/flash_sale4.jpg",
          price: 620,
          originalPrice: 850,
          discount: 14
        },
        {
          title:
            "Creative Professional Business Card / Visiting Card Template PSD 68",
          photo: "daraz/product/flash_sale5.jpg",
          price: 620,
          originalPrice: 850,
          discount: 14
        },
        {
          title: "Chashi Aromatic Chinigura Rice - 1Kg",
          photo: "daraz/product/flash_sale6.jpg",
          price: 620,
          originalPrice: 850,
          discount: 14
        }
      ],

      justForYou: [
        {
          title:
            "ROCK N ROLL SPECIAL Unstitched High Quality Cotton Fabric Exclusive, Fashionable, Stylish and Comfortable, High Quality Printed Three Piece for Women",
          photo: "daraz/justForYou/1.webp",
          price: 620,
          originalPrice: 850,
          discount: 14
        },
        {
          title:
            "Unstitched High Quality Cotton Fabric Exclusive, Fashionable, Stylish and Comfortable, High Quality Printed Three Piece for Women",
          photo: "daraz/justForYou/2.webp",
          price: 620,
          originalPrice: 850,
          discount: 14
        },
        {
          title: "Pran Nazirshail Rice - 20kg",
          photo: "daraz/justForYou/3.webp",
          price: 1370,
          originalPrice: 850,
          discount: 14
        },
        {
          title: "2020 NEW STYLE Long Sleeve Casual Shirt for Men",
          photo: "daraz/justForYou/4.webp",
          price: 270,
          originalPrice: 850,
          discount: 14
        },
        {
          title: "New Slim-fit Stretchable Denim Jeans Pant For Men",
          photo: "daraz/justForYou/5.webp",
          price: 348,
          originalPrice: 850,
          discount: 14
        },
        {
          title: "Remax RM 501 In Ear Earphone Stereo Headset BASE - D RIVEN",
          photo: "daraz/justForYou/6.webp",
          price: 190,
          originalPrice: 850,
          discount: 14
        },
        {
          title:
            "ROCK N ROLL SPECIAL Unstitched High Quality Cotton Fabric Exclusive, Fashionable, Stylish and Comfortable, High Quality Printed Three Piece for Women",
          photo: "daraz/justForYou/7.webp",
          price: 620,
          originalPrice: 850,
          discount: 14
        },
        {
          title:
            "Unstitched Multicolor Cotton Exclusive High Quality Printed Three Piece for Women",
          photo: "daraz/justForYou/8.webp",
          price: 620,
          originalPrice: 850,
          discount: 14
        },
        {
          title:
            "NEL R800 Kids Ride On Electric Motorbike With Training Safety Wheel 6V Battery",
          photo: "daraz/justForYou/9.webp",
          price: 9800,
          originalPrice: 850,
          discount: 14
        },
        {
          title: "Weightless Georgette Saree for Women",
          photo: "daraz/justForYou/10.webp",
          price: 549,
          originalPrice: 850,
          discount: 14
        },
        {
          title: "Walton WMS024WN Optical Wired Mouse",
          photo: "daraz/justForYou/11.webp",
          price: 150,
          originalPrice: 850,
          discount: 14
        },
        {
          title:
            "Mango F6 - Feature Phone - Dual SIM - Selfie Camera - BIg Speaker - Big Battery 2000mAh - 3 LED Torch - Red",
          photo: "daraz/justForYou/12.webp",
          price: 742,
          originalPrice: 850,
          discount: 14
        },
        {
          title: "Red and Black Linen Casual Kurti (Tailor Made)",
          photo: "daraz/justForYou/13.webp",
          price: 900,
          originalPrice: 850,
          discount: 14
        },
        {
          title: "Cane Closet 5 Drawer Light Pink 91516",
          photo: "daraz/justForYou/14.webp",
          price: 2700,
          originalPrice: 850,
          discount: 14
        },
        {
          title: "MOHNAZ BLESS Special Linen Made Readymade Kurti for Women.",
          photo: "daraz/justForYou/15.webp",
          price: 750,
          originalPrice: 850,
          discount: 14
        },
        {
          title:
            "Unstitched Cotton Exclusive, Fashionable, Stylish and Comfortable, High Quality Printed Three Piece for Women",
          photo: "daraz/justForYou/16.webp",
          price: 650,
          originalPrice: 850,
          discount: 14
        },
        {
          title:
            "Honda Remote Control Motorcycle Alarm System Security Lock for Any Bike Anti theft Safe Your Bike from thief",
          photo: "daraz/justForYou/17.webp",
          price: 1420,
          originalPrice: 850,
          discount: 14
        },
        {
          title: "Dettol Handwash Original 200ml Pump Liquid Soap",
          photo: "daraz/justForYou/18.webp",
          price: 85,
          originalPrice: 850,
          discount: 14
        },
        {
          title: "24  HD LED TV - Black",
          photo: "daraz/justForYou/19.webp",
          price: 742,
          originalPrice: 850,
          discount: 14
        },
        {
          title: "Walton WFD-1B6-GDEL-XX Frost Refrigerator - 132 Ltr",
          photo: "daraz/justForYou/20.webp",
          price: 1420,
          originalPrice: 850,
          discount: 14
        },
        {
          title:
            "Smart Fashion wallet money bag china super brand multi-function premium quality-multi color",
          photo: "daraz/justForYou/21.webp",
          price: 85,
          originalPrice: 850,
          discount: 14
        },
        {
          title:
            "Black Giant Raspberry (মালবেরী) Bonsai Seed/বীজ- ২০ পিস (R-C9)",
          photo: "daraz/justForYou/22.webp",
          price: 742,
          originalPrice: 850,
          discount: 14
        },
        {
          title:
            "Black Giant Raspberry (মালবেরী) Bonsai Seed/বীজ- ২০ পিস (R-C9)",
          photo: "daraz/justForYou/23.webp",
          price: 742,
          originalPrice: 850,
          discount: 14
        },
        {
          title:
            "PAKISTANI LASAR CUT TWO PIECE SALWAR KAMEEZ (Un-stiched) FOR WOMEN",
          photo: "daraz/justForYou/24.webp",
          price: 715,
          originalPrice: 850,
          discount: 14
        }
      ],

      darazMallProducts: [
        {
          title: "Fresh (MGI) ",
          subtitle: "Fresh (MGI)",
          photo: "daraz/product/daraz_mall1.png",
          price: 620,
          originalPrice: 850,
          discount: 14
        },
        {
          title: "Arafat Fashion House",
          subtitle: "Best of Budget",
          photo: "daraz/product/daraz_mall2.jpg",
          price: 620,
          originalPrice: 850,
          discount: 14
        },
        {
          title: "International Homeware (ihw) ",
          subtitle: "International Homeware",
          photo: "daraz/product/daraz_mall3.jpg",
          price: 620,
          originalPrice: 850,
          discount: 14
        },
        {
          title: "Square Food & Beverage Ltd.",
          subtitle: "Square Food & Beverage Ltd",
          photo: "daraz/product/daraz_mall4.jpg",
          price: 620,
          originalPrice: 850,
          discount: 14
        },
        {
          title: "Labu Flutes",
          subtitle: "Music of Bangla",
          photo: "daraz/product/daraz_mall5.jpg",
          price: 620,
          originalPrice: 850,
          discount: 14
        },
        {
          title: "ACI Premio Plastics",
          subtitle: "Make life simple",
          photo: "daraz/product/daraz_mall6.jpg",
          price: 620,
          originalPrice: 850,
          discount: 14
        }
      ],

      categories: [
        {
          title: "Rice",
          photo: "daraz/categories/1.jpg"
        },
        {
          title: "Hand Washes and Sanitizers",
          photo: "daraz/categories/2.jpg"
        },
        {
          title: "Oil",
          photo: "daraz/categories/3.jpg"
        },
        {
          title: "Trimmers, Groomers & Clippers",
          photo: "daraz/categories/4.jpg"
        },
        {
          title: "Routers",
          photo: "daraz/categories/5.jpg"
        },
        {
          title: "In-Ear Headphones",
          photo: "daraz/categories/6.jpg"
        },
        {
          title: "Dumbbells",
          photo: "daraz/categories/7.jpg"
        },
        {
          title: "Hand Tool Parts & Accessories",
          photo: "daraz/categories/8.jpg"
        },
        {
          title: "Disposable Diapers",
          photo: "daraz/categories/9.jpg"
        },
        {
          title: "Blenders",
          photo: "daraz/categories/10.jpg"
        },
        {
          title: "Shalwar Kameez",
          photo: "daraz/categories/11.jpg"
        },
        {
          title: "Specialty Kitchen Tools",
          photo: "daraz/categories/12.jpg"
        },
        {
          title: "Snack Foods",
          photo: "daraz/categories/13.jpg"
        },
        {
          title: "Laptop stands",
          photo: "daraz/categories/14.jpg"
        },
        {
          title: "Mixers",
          photo: "daraz/categories/15.jpg"
        },
        {
          title: "Smart Televisions",
          photo: "daraz/categories/16.jpg"
        }
      ],

      collections: [
        {
          title: "Elite Gaming Gears >",
          subtitle: "14,875 products",
          photo1: "daraz/collections/1.1.jpg",
          photo2: "daraz/collections/1.2.jpg",
          photo3: "daraz/collections/1.3.jpg"
        },
        {
          title: "Happiness is Homemade! >",
          subtitle: "33,612 products",
          photo1: "daraz/collections/2.1.jpg",
          photo2: "daraz/collections/2.2.jpg",
          photo3: "daraz/collections/2.3.jpg"
        },
        {
          title: "My Baby's Room >",
          subtitle: "1,276 products",
          photo1: "daraz/collections/3.1.jpg",
          photo2: "daraz/collections/3.2.jpg",
          photo3: "daraz/collections/3.3.jpg"
        },
        {
          title: "Hi Handsome! >",
          subtitle: "32,451 products",
          photo1: "daraz/collections/4.1.jpg",
          photo2: "daraz/collections/4.2.jpg",
          photo3: "daraz/collections/4.3.jpg"
        },
        {
          title: "Make Parenthood Easier >",
          subtitle: "11,170 products",
          photo1: "daraz/collections/5.1.jpg",
          photo2: "daraz/collections/5.2.jpg",
          photo3: "daraz/collections/5.3.jpg"
        },
        {
          title: "Modern Kitchen >",
          subtitle: "14,887 products",
          photo1: "daraz/collections/6.1.jpg",
          photo2: "daraz/collections/6.2.jpg",
          photo3: "daraz/collections/6.3.jpg"
        },
        {
          title: "Tech Essentials >",
          subtitle: "44,929 products",
          photo1: "daraz/collections/7.1.jpg",
          photo2: "daraz/collections/7.2.jpg",
          photo3: "daraz/collections/7.3.jpg"
        },
        {
          title: "Caffeine Lover >",
          subtitle: "1,237 products",
          photo1: "daraz/collections/8.1.jpg",
          photo2: "daraz/collections/8.2.jpg",
          photo3: "daraz/collections/8.3.png"
        }
      ]
    };
  }
};
</script>


<style scoped>
.top_card_header {
  height: 38px;
  line-height: 38px;
}

.top_card_header_title {
  float: left;
  font-family: Roboto-Regular;
  font-size: 22px;
  color: #999;
  width: 220px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
}

.top_card_right_header_title {
  font-family: Roboto-Medium;
  float: right;
  margin-right: 0;
  font-size: 14px;
  color: #1a9cb7;
}

.card_product_title {
  height: 52px;
  line-height: 18px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  margin-bottom: 4px;
  font-size: 14px;
  text-align: left;
}

/* dropdown menulist */

.categories_list_item {
  min-height: 30px;
}
.categories_list_item_content {
  /* background: blue; */
  padding: 2px;
}
.categories_button {
  /* background-color: red !important; */
  text-transform: capitalize !important;
  text-align: left !important;
}

.categories_button > .v-btn {
  text-transform: capitalize !important;
  height: 20px !important;
}
/* collections */

.card-collections-title {
  margin: 0 auto;
  font-size: 14px;
  line-height: 32px;
  height: 24px;
  color: #212121;
}
.card-collections-subtitle {
  margin: 6px auto 0;
  font-size: 12px;
  line-height: 14px;
  height: 14px;
  color: #757575;
}
.card-collections-products {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: space-evenly;
  -webkit-justify-content: space-evenly;
  -ms-flex-pack: space-evenly;
  justify-content: space-evenly;
  margin-top: 18px;
  height: 67px;
}

.card-collections-product {
  -webkit-flex: 0 1 24%;
  -ms-flex: 0 1 24%;
  flex: 0 1 24%;
  text-align: left;
}

.image-wrapper {
  width: 100%;
  height: 100%;
}

.image {
  display: block;
  max-width: 100%;
  height: 100%;
  margin: 0 auto;
}
/* categories*/

.card-categories-image-container {
  margin: 0 auto;
  width: 80px;
  height: 80px;
}

.card-categories-name {
  text-align: center;
  margin-top: 10px;
}

/* darazMall panel */
.card-official-stores-brand-img {
  width: 188px;
  height: 188px;
  overflow: hidden;
  background-color: #f5f5f5;
}

.card-official-stores-h1 {
  font-size: 14px;
  color: #212121;
  line-height: 18px;
  margin: 8px 8px 4px;
}

.card-official-stores-p {
  font-size: 12px;
  line-height: 14px;
  color: #9e9e9e;
  margin: 0 8px;
}

.card_price {
  margin-bottom: 4px;
  font-size: 18px;
  color: #f57224;
  letter-spacing: -0.56px;
  line-height: 22px;
  height: 22px;
  text-align: left;
}

.card_original_price {
  font-size: 12px;
  line-height: 12px;
  margin-bottom: 4px;
  text-align: left;
}

.card_original_price > .price {
  color: #9e9e9e;
  text-decoration: line-through;
  padding-right: 4px;
}

.card_outline {
  border: none !important;
  margin-bottom: 15px;
}

.card_outline:hover {
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
  cursor: pointer;
}
</style>