<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6" offset-md="3">
        <div class>
          <v-row>
            <v-col cols="12" md="6" class="text_align_left">
              <h3>Create your Daraz Account</h3>
            </v-col>
            <v-col cols="12" md="6" class="text_align_right">
              <p>
                Already member?
                <router-link to="/login">Login</router-link>&nbsp; here.
              </p>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>

    <v-card class="pa-md-7 mb-md-7" :elevation="6">
      <v-alert type="error" v-if="alert" color="error">Please fill the Email and Password.</v-alert>
      <v-form @submit.prevent="submit" ref="loginForm">
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="phone"
              :counter="11"
              :rules="phoneRules"
              label="Phone Number"
              required
            ></v-text-field>

            <v-text-field v-model="verificationCode" label="Verification Code" required></v-text-field>

            <v-text-field
              v-model="password"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.min]"
              :type="show1 ? 'text' : 'password'"
              name="password"
              label="Password"
              hint="At least 8 characters"
              counter
              @click:append="show1 = !show1"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field v-model="name" label="Name" required></v-text-field>

            <v-text-field
              v-model="email"
              :counter="30"
              :rules="emailRules"
              label="Email Adress"
              required
            ></v-text-field>
          </v-col>
        </v-row>

        <v-btn color="error" class="mr-4" @click="reset">Reset Form</v-btn>

        <v-btn color="success" type="submit">Submit</v-btn>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      alert: false,
      show1: false,
      rules: {
        required: value => !!value || "Required.",
        min: v => v.length >= 8 || "Min 8 characters"
      },

      passwordRules: [
        v => !!v || "Password is required",
        v =>
          (v && v.length >= 6) || "Password must be greater than 6 characters"
      ],
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ]
    };
  },

  methods: {
    submit() {
      if (this.email == "" || this.password == "") {
        this.alert = true;
      } else {
        this.alert = false;
      }
      console.log(
        "Email address is: " + this.email + ", Password is : " + this.password
      );
    },

    reset() {
      this.$refs.loginForm.reset();
    }
  }
};
</script>