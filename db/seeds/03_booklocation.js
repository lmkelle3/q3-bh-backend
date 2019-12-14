exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("booklocation")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("booklocation").insert([
        {
          book_id: 7,
          location_id: 4
        },
        {
          book_id: 57,
          location_id: 4
        },
        {
          book_id: 6,
          location_id: 10
        },
        {
          book_id: 38,
          location_id: 3
        },
        {
          book_id: 59,
          location_id: 4
        },
        {
          book_id: 49,
          location_id: 4
        },
        {
          book_id: 28,
          location_id: 9
        },
        {
          book_id: 59,
          location_id: 10
        },
        {
          book_id: 66,
          location_id: 7
        },
        {
          book_id: 20,
          location_id: 5
        },
        {
          book_id: 45,
          location_id: 4
        },
        {
          book_id: 52,
          location_id: 4
        },
        {
          book_id: 35,
          location_id: 9
        },
        {
          book_id: 97,
          location_id: 7
        },
        {
          book_id: 10,
          location_id: 9
        },
        {
          book_id: 84,
          location_id: 3
        },
        {
          book_id: 45,
          location_id: 10
        },
        {
          book_id: 14,
          location_id: 4
        },
        {
          book_id: 89,
          location_id: 7
        },
        {
          book_id: 27,
          location_id: 4
        },
        {
          book_id: 30,
          location_id: 6
        },
        {
          book_id: 49,
          location_id: 6
        },
        {
          book_id: 88,
          location_id: 9
        },
        {
          book_id: 40,
          location_id: 4
        },
        {
          book_id: 88,
          location_id: 5
        },
        {
          book_id: 32,
          location_id: 8
        },
        {
          book_id: 3,
          location_id: 6
        },
        {
          book_id: 44,
          location_id: 8
        },
        {
          book_id: 28,
          location_id: 4
        },
        {
          book_id: 24,
          location_id: 9
        },
        {
          book_id: 86,
          location_id: 9
        },
        {
          book_id: 97,
          location_id: 9
        },
        {
          book_id: 14,
          location_id: 7
        },
        {
          book_id: 90,
          location_id: 1
        },
        {
          book_id: 98,
          location_id: 4
        },
        {
          book_id: 71,
          location_id: 7
        },
        {
          book_id: 58,
          location_id: 1
        },
        {
          book_id: 89,
          location_id: 8
        },
        {
          book_id: 62,
          location_id: 2
        },
        {
          book_id: 8,
          location_id: 8
        },
        {
          book_id: 74,
          location_id: 1
        },
        {
          book_id: 18,
          location_id: 1
        },
        {
          book_id: 42,
          location_id: 10
        },
        {
          book_id: 1,
          location_id: 8
        },
        {
          book_id: 67,
          location_id: 4
        },
        {
          book_id: 93,
          location_id: 2
        },
        {
          book_id: 45,
          location_id: 6
        },
        {
          book_id: 45,
          location_id: 10
        },
        {
          book_id: 79,
          location_id: 2
        },
        {
          book_id: 70,
          location_id: 4
        },
        {
          book_id: 47,
          location_id: 3
        },
        {
          book_id: 11,
          location_id: 7
        },
        {
          book_id: 45,
          location_id: 4
        },
        {
          book_id: 74,
          location_id: 2
        },
        {
          book_id: 67,
          location_id: 3
        },
        {
          book_id: 89,
          location_id: 7
        },
        {
          book_id: 80,
          location_id: 7
        },
        {
          book_id: 48,
          location_id: 4
        },
        {
          book_id: 78,
          location_id: 6
        },
        {
          book_id: 41,
          location_id: 1
        },
        {
          book_id: 95,
          location_id: 2
        },
        {
          book_id: 14,
          location_id: 6
        },
        {
          book_id: 56,
          location_id: 7
        },
        {
          book_id: 7,
          location_id: 10
        },
        {
          book_id: 100,
          location_id: 10
        },
        {
          book_id: 33,
          location_id: 8
        },
        {
          book_id: 60,
          location_id: 4
        },
        {
          book_id: 76,
          location_id: 4
        },
        {
          book_id: 23,
          location_id: 7
        },
        {
          book_id: 95,
          location_id: 6
        },
        {
          book_id: 23,
          location_id: 5
        },
        {
          book_id: 64,
          location_id: 10
        },
        {
          book_id: 77,
          location_id: 1
        },
        {
          book_id: 19,
          location_id: 5
        },
        {
          book_id: 65,
          location_id: 7
        },
        {
          book_id: 11,
          location_id: 9
        },
        {
          book_id: 70,
          location_id: 5
        },
        {
          book_id: 12,
          location_id: 3
        },
        {
          book_id: 7,
          location_id: 1
        },
        {
          book_id: 81,
          location_id: 6
        },
        {
          book_id: 55,
          location_id: 3
        },
        {
          book_id: 52,
          location_id: 1
        },
        {
          book_id: 33,
          location_id: 3
        },
        {
          book_id: 13,
          location_id: 7
        },
        {
          book_id: 7,
          location_id: 8
        },
        {
          book_id: 10,
          location_id: 2
        },
        {
          book_id: 46,
          location_id: 1
        },
        {
          book_id: 57,
          location_id: 5
        },
        {
          book_id: 75,
          location_id: 10
        },
        {
          book_id: 87,
          location_id: 5
        },
        {
          book_id: 71,
          location_id: 3
        },
        {
          book_id: 77,
          location_id: 8
        },
        {
          book_id: 36,
          location_id: 1
        },
        {
          book_id: 37,
          location_id: 7
        },
        {
          book_id: 2,
          location_id: 1
        },
        {
          book_id: 20,
          location_id: 6
        },
        {
          book_id: 39,
          location_id: 10
        },
        {
          book_id: 97,
          location_id: 3
        },
        {
          book_id: 98,
          location_id: 4
        },
        {
          book_id: 13,
          location_id: 2
        }
      ]);
    });
};
