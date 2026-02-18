package com.learning.pl.domain.dto;

import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.PositiveOrZero;
import jakarta.validation.constraints.Size;

public record PlayerDto(

        Integer id,

        @Size(max = 30, message = "Player name cannot exceed 30 characters")
        String playerName,

        @Size(max = 10, message = "Nation cannot exceed 10 characters")
        String nation,

        @Size(max = 30, message = "Position cannot exceed 30 characters")
        String pos,

        @Positive(message = "Age must be a positive number")
        Integer age,

        @PositiveOrZero(message = "Matches played must be zero or positive")
        Integer matchesPlayed,

        @PositiveOrZero(message = "Starts must be zero or positive")
        Integer starts,

        @PositiveOrZero(message = "Minutes played must be zero or positive")
        Float minutesPlayed,

        @PositiveOrZero(message = "Goals must be zero or positive")
        Float goals,

        @PositiveOrZero(message = "Assists must be zero or positive")
        Float assists,

        @PositiveOrZero(message = "Penalties scored must be zero or positive")
        Float penaltiesScored,

        @PositiveOrZero(message = "Yellow cards must be zero or positive")
        Float yellowCards,

        @PositiveOrZero(message = "Red cards must be zero or positive")
        Float redCards,

        @PositiveOrZero(message = "Expected goals must be zero or positive")
        Float expectedGoals,

        @PositiveOrZero(message = "Expected assists must be zero or positive")
        Float expectedAssists,

        @Size(max = 100, message = "Team name cannot exceed 100 characters")
        String teamName
) {
}
