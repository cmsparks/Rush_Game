helmet = require 'helmet'
compression = require 'compression'
express = require 'express'
http = require 'http'

app = express()
server = app.listen process.env.PORT or 3000
io = require('socket.io') server

questions = {
  "data": [
    {
      "name": "What is a man?",
      "choices": [
        "a creature",
        "a woman",
        "a pinapple",
        "rollsy"
      ],
      "correct": [
        "a creature"
      ]
    },
    {
      "name": "question",
      "choices": [
        "a",
        "b",
        "c",
        "d"
      ],
      "correct": [
        "a"
      ]
    },
    {
      "name": "question2",
      "choices": [
        "a",
        "b",
        "c",
        "d"
      ],
      "correct": [
        "a"
      ]
    },

    {
      "name": "question3",
      "choices": [
        "a",
        "b",
        "c",
        "d"
      ],
      "correct": [
        "a"
      ]
    },
    {
      "name": "question4",
      "choices": [
        "a",
        "b",
        "c",
        "d"
      ],
      "correct": [
        "a"
      ]
    },
    {
      "name": "question5",
      "choices": [
        "a",
        "b",
        "c",
        "d"
      ],
      "correct": [
        "a"
      ]
    },
    {
      "name": "question6",
      "choices": [
        "a",
        "b",
        "c",
        "d"
      ],
      "correct": [
        "a"
      ]
  },
    {
      "name": "question7",
      "choices": [
        "a",
        "b",
        "c",
        "d"
      ],
      "correct": [
        "a"
      ]
    },
    {
      "name": "question8",
      "choices": [
        "a",
        "b",
        "c",
        "d"
      ],
      "correct": [
        "a"
      ]
    },
    {
      "name": "question9",
      "choices": [
        "a",
        "b",
        "c",
        "d"
      ],
      "correct": [
        "a"
      ]
    }
  ]
}

players = []
start = false

app.use helmet()
app.use compression()
app.get '/', (req, res) ->
  res.redirect(303, '/student/login')
app.get '/student/game', (req, res, next) ->
  if start
    res.redirect(303, '/student/no_entry')
  else
    next()
app.use express.static 'build/public'

io.on 'connection', (socket) ->
  # console.log(players)
  # # setInterval(-> 
  # #   socket.emit('asdf')
  # # , 1000)
  # console.log(start)

  # socket.on 'questions', (questions_) ->
  #   questions = questions_
    # console.log('questions')

  socket.on 'player', (player) ->
    if not start
      players.push(player)
      # console.log(player)
    socket.emit 'player_success'

  socket.on 'start_thing', ->
    start = true
    # socket.broadcast.emit('first_question')
    socket.broadcast.emit('questions', questions)


