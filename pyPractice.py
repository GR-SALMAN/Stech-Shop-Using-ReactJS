# x = (1, 2, 3, 4, 5, 6, 7)

# y = [1, 2, 3, 4, 5, 6, 7, 8, 9]

# z = {1, 2, 3, 4, 5, 6, 7, 8, 9}

# a = list(z)

# print(a)

# def findMedian(x, y):
#     z = sorted([*x, *y])

#     if (len(z) % 2 == 1):
#         med = z[len(z) // 2]
#         return med
#     else:
#         med = (z[len(z) // 2 - 1] + z[len(z) // 2]) / 2
#         return med

# print(findMedian([1, 2, 3], [4, 5, 7, 6, 9, 8]))

# planets = [
#     'Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus',
#     'Neptune'
# ]

# # for el in planets:
# #     print(f"this is {el}", end='')

# for i in range(len(planets)):
#     print(f"this is {i}", end=' ')

from itertools import permutations

# ধরি ইনপুট হিসেবে n দেওয়া হলো
n = input("Enter the number: ")

# অঙ্কগুলোকে তালিকায় রূপান্তর করি
digits = list(n)

print(digits)

# # সব permutations বের করি
# all_perms = permutations(digits)

# # সব permutation-কে সংখ্যা হিসেবে রাখার জন্য একটা লিস্ট
# all_numbers = []

# for p in all_perms:
#     number = int("".join(p))  # tuple -> string -> int
#     all_numbers.append(number)

# # সবচেয়ে বড় ও ছোট সংখ্যা বের করি
# maximum = max(all_numbers)
# minimum = min(all_numbers)

# # পার্থক্য বের করি
# difference = maximum - minimum

# # ফলাফল প্রিন্ট করি
# print("Maximum number:", maximum)
# print("Minimum number:", minimum)
# print("Difference:", difference)
