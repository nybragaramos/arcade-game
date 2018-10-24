[Udacity Frontend Nanodegree Arcade Game](https://github.com/udacity/frontend-nanodegree-arcade-game)
===============================

In this game you have a Player, Enemies (Bugs) and Collectible items(Gems,Star,Heart). The goal of the player is to reach the water collecting as many Collectible items as possible. 

* The player can move left, right, up and down with the arrow keys. 
* The player begin the game with 3 lifes and 0 score points. 
* The player can earn lifes and score points with the collectible items. 

		| Element       | Score Points  |
		| ------------- |:-------------:|
		| Blue gems     | 5 points      |
		| Green gems    | 10 points     |
		| Orange gems   | 15 points     |
		| Key           | 25 points     |
		| Star          | 50 points     |
		| Heart         | 1 life        |

* The enemies move in varying speeds on the paved block portion of the scene. 
* Once the player collides with an enemy, the player returns to the starting position.
* If the player has score points it will lose them, if not it will lose one life. 
* If the player has no life and no points to lose it will lose the game. 
* If the play reaches the water it won. 

## Usage

1. Clone project and open the index.html at your browser

		```
		$ git clone https://github.com/nybragaramos/arcade-game.git
		```

2. Online Version

[Arcade Game](https://nybragaramos.github.io/arcade-game/)

## Built With

[jQuery](http://jquery.com/) - JavaScript library

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
