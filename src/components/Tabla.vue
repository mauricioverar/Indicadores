<template>
    <div>
        <!-- <h3>data</h3>
      <v-data-table
        :headers="headers"
        :items="datos"
        :items-per-page="5"
        class="elevation-1"
      ></v-data-table> -->
      <div>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th  v-for="(item, clave) in datos" :key="clave">{{ item.fecha }}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td  v-for="(item, clave) in datos" :key="clave">{{ item.valor }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>
    </div>
</template>

<script>
export default {
    name: 'Tabla',

    props: ["datos"]
}
</script>