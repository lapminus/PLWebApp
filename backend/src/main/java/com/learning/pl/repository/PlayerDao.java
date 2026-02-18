package com.learning.pl.repository;

import com.learning.pl.domain.model.Player;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PlayerDao extends JpaRepository<Player, Integer> {
    @Query("""
                SELECT p FROM Player p
                WHERE (:name IS NULL OR p.playerName ILIKE %:name%)
                  AND (:position IS NULL OR p.pos ILIKE %:position%)
                  AND (:team IS NULL OR p.teamName = :team)
                  AND (:nation IS NULL OR p.nation ILIKE %:nation%)
                ORDER BY p.id ASC
            """)
    Page<Player> findPlayersBy(
            @Param("name") String name,
            @Param("position") String position,
            @Param("team") String team,
            @Param("nation") String nation,
            Pageable pageable);

    @Query("SELECT DISTINCT(p.teamName) FROM Player p ORDER BY p.teamName ASC")
    List<String> findAllTeams();

    @Query("SELECT DISTINCT p.nation FROM Player p")
    List<String> findAllNations();

    @Query("SELECT DISTINCT unnest(string_to_array(p.pos, ',')) FROM Player p")
    List<String> findAllPositions();

}