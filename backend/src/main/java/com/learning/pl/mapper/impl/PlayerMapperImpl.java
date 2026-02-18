package com.learning.pl.mapper.impl;

import com.learning.pl.domain.dto.PlayerDto;
import com.learning.pl.domain.model.Player;
import com.learning.pl.mapper.PlayerMapper;
import org.springframework.stereotype.Component;

@Component
public class PlayerMapperImpl implements PlayerMapper {
    @Override
    public PlayerDto toDto(Player player) {
        return new PlayerDto(
                player.getId(),
                player.getPlayerName(),
                player.getNation(),
                player.getPos(),
                player.getAge(),
                player.getMatchesPlayed(),
                player.getStarts(),
                player.getMinutesPlayed(),
                player.getGoals(),
                player.getAssists(),
                player.getPenaltiesScored(),
                player.getYellowCards(),
                player.getRedCards(),
                player.getExpectedGoals(),
                player.getExpectedAssists(),
                player.getTeamName()
        );
    }

    @Override
    public Player toEntity(PlayerDto playerDto) {
        return new Player(
                null,
                playerDto.playerName(),
                playerDto.nation(),
                playerDto.pos(),
                playerDto.age(),
                playerDto.matchesPlayed(),
                playerDto.starts(),
                playerDto.minutesPlayed(),
                playerDto.goals(),
                playerDto.assists(),
                playerDto.penaltiesScored(),
                playerDto.yellowCards(),
                playerDto.redCards(),
                playerDto.expectedGoals(),
                playerDto.expectedAssists(),
                playerDto.teamName()
        );
    }
}
