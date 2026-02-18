package com.learning.pl.service;

import com.learning.pl.domain.model.Player;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

public interface PlayerService {
    Optional<Player> getPlayerById(Integer id);

    Page<Player> getPlayersBy(String name, String position, String team, String nation, Pageable pageable);

    List<String> getAllTeams();

    List<String> getAllNations();

    List<String> getAllPositions();

    Player createPlayer(Player player);

    Player updatePlayer(Integer id, Player player);

    void deletePlayer(Integer id);
}