package com.learning.pl.mapper;

import com.learning.pl.domain.dto.PlayerDto;
import com.learning.pl.domain.model.Player;

public interface PlayerMapper {
    PlayerDto toDto(Player player);
    Player toEntity(PlayerDto playerDto);
}
