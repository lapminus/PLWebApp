package com.learning.pl.domain.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "prem_data")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Player {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "player_name")
    private String playerName;

    @Column(name = "nation")
    private String nation;

    @Column(name = "pos")
    private String pos;

    @Column(name = "age")
    private Integer age;

    @Column(name = "matches_played")
    private Integer matchesPlayed;

    @Column(name = "starts")
    private Integer starts;

    @Column(name = "minutes_played")
    private Float minutesPlayed;

    @Column(name = "goals")
    private Float goals;

    @Column(name = "assists")
    private Float assists;

    @Column(name = "penalties_scored")
    private Float penaltiesScored;

    @Column(name = "yellow_cards")
    private Float yellowCards;

    @Column(name = "red_cards")
    private Float redCards;

    @Column(name = "expected_goals")
    private Float expectedGoals;

    @Column(name = "expected_assists")
    private Float expectedAssists;

    @Column(name = "team_name")
    private String teamName;
}

