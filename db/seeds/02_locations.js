exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("locations")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("locations").insert([
        {
          address: "288 Farragut Road Echo, Maine"
        },
        {
          address: "168 Allen Avenue Chloride, Washington"
        },
        {
          address: "531 Truxton Street Taft, Mississippi"
        },
        {
          address: "34 Stockton Street Draper, Virgin Islands"
        },
        {
          address: "56 Middagh Street Movico, District Of Columbia"
        },
        {
          address: "667 Gold Street Klondike, Montana"
        },
        {
          address: "246 Homecrest Court Barrelville, Indiana"
        },
        {
          address: "224 Gilmore Court Enlow, Massachusetts"
        },
        {
          address: "562 Lafayette Walk Hessville, Minnesota"
        },
        {
          address: "170 Junius Street Spokane, Marshall Islands"
        }
      ]);
    });
};
