<template>
	<div>
	<v-layout wrap style="height: 200px;">
    <v-container>
      <v-layout justify-center class="open">
        <v-btn @click.stop="drawer = !drawer" color="white" dark>    
        	<v-icon large color="grey darken-2">view_headline</v-icon>
		</v-btn>
      </v-layout>
    </v-container>
    <v-navigation-drawer
      temporary
      v-model="drawer"
      :mini-variant="mini"
      dark
      absolute
    >
      <v-list class="pa-1">
        <v-list-tile v-if="mini" @click.stop="mini = !mini">
          <v-list-tile-action>
            <v-icon>chevron_right</v-icon>
          </v-list-tile-action>
        </v-list-tile>
        <v-list-tile avatar tag="div">
          <v-list-tile-content>
            <v-list-tile-title>{{ name }} </v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-btn icon @click.stop="mini = !mini">
              <v-icon>chevron_left</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
      <v-list class="pt-0" dense>
        <v-divider light></v-divider>
        <v-list-tile v-for="item in items.notes" :key="item.id">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <router-link :to="`/note/${item.id}`">
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </router-link>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </v-layout>
  <v-layout row justify-center class="add">
    <v-dialog v-model="dialog" persistent max-width="500px">
      <v-btn color="primary" dark slot="activator">  
        	<v-icon large color="white darken-2">add_circle_outline</v-icon>
      </v-btn>
      <v-card>
        <v-card-title>
          <span class="headline">Note add</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex md12>
                <v-text-field label="Title" id="title" required></v-text-field>
              </v-flex>
            </v-layout>
             <v-layout wrap>
              <v-flex md12>
                <textarea label="Text" id="text" cols="55" disable rows="10"></textarea>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="dialog = false" @click="addNote()">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
  <v-layout class="added">
    <v-flex md3>
      <v-alert type="success" :value="status">
      Заметка добавлена.
    </v-alert>
    </v-flex>
  </v-layout>
</div>
</template>

<!-- В будущем сделаю выбор иконки -->

<script>

export default {
    data () {
        return {
            drawer: true,
            items: [],
            name: '',
            mini: false,
            status: false,
            right: null,
            dialog: false
        }
    },
    created: function() {
      this.name = localStorage.getItem('name');
      this.$store.dispatch('initNotes', {name: this.name})
      this.items = this.$store.state.notes;
    },
    methods: {
        addNote() {
          this.$store.dispatch('addNote', { title: title.value, text: text.value, name: this.name })
          this.$store.dispatch('initNotes', {name: this.name})
          this.status = true;
          setTimeout(() => {
            this.status = false;
          }, 3000);
      }
    }
}


</script>


