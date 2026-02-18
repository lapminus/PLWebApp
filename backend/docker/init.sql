CREATE TABLE prem_data(
    id               BIGSERIAL PRIMARY KEY,
    player_name      VARCHAR(100),
    nation           VARCHAR(50),
    pos              VARCHAR(50),
    age              INTEGER,
    matches_played   INTEGER,
    starts           INTEGER,
    minutes_played   FLOAT,
    goals            FLOAT,
    assists          FLOAT,
    penalties_scored FLOAT,
    yellow_cards     FLOAT,
    red_cards        FLOAT,
    expected_goals   FLOAT,
    expected_assists FLOAT,
    team_name        VARCHAR(100)
);

COPY prem_data(
    player_name, nation, pos, age, matches_played, starts, minutes_played, goals,
    assists, penalties_scored, yellow_cards, red_cards, expected_goals, expected_assists,
    team_name
)
FROM '/docker-entrypoint-initdb.d/data.csv'
DELIMITER ','
CSV HEADER;
