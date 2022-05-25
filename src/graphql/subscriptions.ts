/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      type
      id
      name
      email
      imageUri
      bio
      authored {
        items {
          id
          type
          title
          imageUri
          audioUri
          userID
          author
          authorID
          narrator
          narratorID
          artistName
          artistID
          time
          summary
          description
          nsfw
          ratingAvg
          ratingAmt
          genreID
          hidden
          approved
          createdAt
          updatedAt
          numListens
          promptID
        }
        nextToken
      }
      narrated {
        items {
          id
          type
          title
          imageUri
          audioUri
          userID
          author
          authorID
          narrator
          narratorID
          artistName
          artistID
          time
          summary
          description
          nsfw
          ratingAvg
          ratingAmt
          genreID
          hidden
          approved
          createdAt
          updatedAt
          numListens
          promptID
        }
        nextToken
      }
      sharedAssets {
        items {
          id
          type
          title
          audioUri
          time
          isSample
          userID
          sharedUserID
          createdAt
          updatedAt
        }
        nextToken
      }
      sharedImageAssets {
        items {
          id
          type
          title
          imageUri
          isSample
          userID
          sharedUserID
          createdAt
          updatedAt
        }
        nextToken
      }
      sharedWithAssets {
        items {
          id
          type
          title
          audioUri
          time
          isSample
          userID
          sharedUserID
          createdAt
          updatedAt
        }
        nextToken
      }
      sharedWithImageAssets {
        items {
          id
          type
          title
          imageUri
          isSample
          userID
          sharedUserID
          createdAt
          updatedAt
        }
        nextToken
      }
      art {
        items {
          id
          type
          title
          imageUri
          audioUri
          userID
          author
          authorID
          narrator
          narratorID
          artistName
          artistID
          time
          summary
          description
          nsfw
          ratingAvg
          ratingAmt
          genreID
          hidden
          approved
          createdAt
          updatedAt
          numListens
          promptID
        }
        nextToken
      }
      numAuthored
      pseudonym
      narratorPseudo
      artistPseudo
      birthdate
      isPublisher
      isNarrator
      isArtist
      topthree
      following {
        items {
          id
          type
          followerID
          authorID
          createdAt
          updatedAt
        }
        nextToken
      }
      followers {
        items {
          id
          type
          followerID
          authorID
          createdAt
          updatedAt
        }
        nextToken
      }
      Pinned {
        items {
          id
          type
          userID
          storyID
          createdAt
          updatedAt
        }
        nextToken
      }
      Rated {
        items {
          id
          type
          storyID
          userID
          rating
          nsfw
          genreID
          createdAt
          updatedAt
        }
        nextToken
      }
      Finished {
        items {
          id
          type
          userID
          storyID
          createdAt
          nsfw
          genreID
          updatedAt
        }
        nextToken
      }
      sampleUri
      narratorText
      accents
      voice
      artistText
      artStyles
      narratorActiveAt
      artistActiveAt
      plan
      messageSent {
        items {
          id
          type
          title
          subtitle
          content
          userID
          otherUserID
          createdAt
          isReadbyUser
          isReadByOtherUser
          request
          docID
          updatedAt
          status
        }
        nextToken
      }
      messageRec {
        items {
          id
          type
          title
          subtitle
          content
          userID
          otherUserID
          createdAt
          isReadbyUser
          isReadByOtherUser
          request
          docID
          updatedAt
          status
        }
        nextToken
      }
      prompts {
        items {
          id
          type
          userID
          prompt
          nsfw
          createdAt
          updatedAt
          count
          upvote
          approved
        }
        nextToken
      }
      savedPrompts {
        items {
          id
          type
          userID
          promptID
          createdAt
          updatedAt
        }
        nextToken
      }
      inProgressStories {
        items {
          id
          type
          userID
          storyID
          createdAt
          updatedAt
          time
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      type
      id
      name
      email
      imageUri
      bio
      authored {
        items {
          id
          type
          title
          imageUri
          audioUri
          userID
          author
          authorID
          narrator
          narratorID
          artistName
          artistID
          time
          summary
          description
          nsfw
          ratingAvg
          ratingAmt
          genreID
          hidden
          approved
          createdAt
          updatedAt
          numListens
          promptID
        }
        nextToken
      }
      narrated {
        items {
          id
          type
          title
          imageUri
          audioUri
          userID
          author
          authorID
          narrator
          narratorID
          artistName
          artistID
          time
          summary
          description
          nsfw
          ratingAvg
          ratingAmt
          genreID
          hidden
          approved
          createdAt
          updatedAt
          numListens
          promptID
        }
        nextToken
      }
      sharedAssets {
        items {
          id
          type
          title
          audioUri
          time
          isSample
          userID
          sharedUserID
          createdAt
          updatedAt
        }
        nextToken
      }
      sharedImageAssets {
        items {
          id
          type
          title
          imageUri
          isSample
          userID
          sharedUserID
          createdAt
          updatedAt
        }
        nextToken
      }
      sharedWithAssets {
        items {
          id
          type
          title
          audioUri
          time
          isSample
          userID
          sharedUserID
          createdAt
          updatedAt
        }
        nextToken
      }
      sharedWithImageAssets {
        items {
          id
          type
          title
          imageUri
          isSample
          userID
          sharedUserID
          createdAt
          updatedAt
        }
        nextToken
      }
      art {
        items {
          id
          type
          title
          imageUri
          audioUri
          userID
          author
          authorID
          narrator
          narratorID
          artistName
          artistID
          time
          summary
          description
          nsfw
          ratingAvg
          ratingAmt
          genreID
          hidden
          approved
          createdAt
          updatedAt
          numListens
          promptID
        }
        nextToken
      }
      numAuthored
      pseudonym
      narratorPseudo
      artistPseudo
      birthdate
      isPublisher
      isNarrator
      isArtist
      topthree
      following {
        items {
          id
          type
          followerID
          authorID
          createdAt
          updatedAt
        }
        nextToken
      }
      followers {
        items {
          id
          type
          followerID
          authorID
          createdAt
          updatedAt
        }
        nextToken
      }
      Pinned {
        items {
          id
          type
          userID
          storyID
          createdAt
          updatedAt
        }
        nextToken
      }
      Rated {
        items {
          id
          type
          storyID
          userID
          rating
          nsfw
          genreID
          createdAt
          updatedAt
        }
        nextToken
      }
      Finished {
        items {
          id
          type
          userID
          storyID
          createdAt
          nsfw
          genreID
          updatedAt
        }
        nextToken
      }
      sampleUri
      narratorText
      accents
      voice
      artistText
      artStyles
      narratorActiveAt
      artistActiveAt
      plan
      messageSent {
        items {
          id
          type
          title
          subtitle
          content
          userID
          otherUserID
          createdAt
          isReadbyUser
          isReadByOtherUser
          request
          docID
          updatedAt
          status
        }
        nextToken
      }
      messageRec {
        items {
          id
          type
          title
          subtitle
          content
          userID
          otherUserID
          createdAt
          isReadbyUser
          isReadByOtherUser
          request
          docID
          updatedAt
          status
        }
        nextToken
      }
      prompts {
        items {
          id
          type
          userID
          prompt
          nsfw
          createdAt
          updatedAt
          count
          upvote
          approved
        }
        nextToken
      }
      savedPrompts {
        items {
          id
          type
          userID
          promptID
          createdAt
          updatedAt
        }
        nextToken
      }
      inProgressStories {
        items {
          id
          type
          userID
          storyID
          createdAt
          updatedAt
          time
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      type
      id
      name
      email
      imageUri
      bio
      authored {
        items {
          id
          type
          title
          imageUri
          audioUri
          userID
          author
          authorID
          narrator
          narratorID
          artistName
          artistID
          time
          summary
          description
          nsfw
          ratingAvg
          ratingAmt
          genreID
          hidden
          approved
          createdAt
          updatedAt
          numListens
          promptID
        }
        nextToken
      }
      narrated {
        items {
          id
          type
          title
          imageUri
          audioUri
          userID
          author
          authorID
          narrator
          narratorID
          artistName
          artistID
          time
          summary
          description
          nsfw
          ratingAvg
          ratingAmt
          genreID
          hidden
          approved
          createdAt
          updatedAt
          numListens
          promptID
        }
        nextToken
      }
      sharedAssets {
        items {
          id
          type
          title
          audioUri
          time
          isSample
          userID
          sharedUserID
          createdAt
          updatedAt
        }
        nextToken
      }
      sharedImageAssets {
        items {
          id
          type
          title
          imageUri
          isSample
          userID
          sharedUserID
          createdAt
          updatedAt
        }
        nextToken
      }
      sharedWithAssets {
        items {
          id
          type
          title
          audioUri
          time
          isSample
          userID
          sharedUserID
          createdAt
          updatedAt
        }
        nextToken
      }
      sharedWithImageAssets {
        items {
          id
          type
          title
          imageUri
          isSample
          userID
          sharedUserID
          createdAt
          updatedAt
        }
        nextToken
      }
      art {
        items {
          id
          type
          title
          imageUri
          audioUri
          userID
          author
          authorID
          narrator
          narratorID
          artistName
          artistID
          time
          summary
          description
          nsfw
          ratingAvg
          ratingAmt
          genreID
          hidden
          approved
          createdAt
          updatedAt
          numListens
          promptID
        }
        nextToken
      }
      numAuthored
      pseudonym
      narratorPseudo
      artistPseudo
      birthdate
      isPublisher
      isNarrator
      isArtist
      topthree
      following {
        items {
          id
          type
          followerID
          authorID
          createdAt
          updatedAt
        }
        nextToken
      }
      followers {
        items {
          id
          type
          followerID
          authorID
          createdAt
          updatedAt
        }
        nextToken
      }
      Pinned {
        items {
          id
          type
          userID
          storyID
          createdAt
          updatedAt
        }
        nextToken
      }
      Rated {
        items {
          id
          type
          storyID
          userID
          rating
          nsfw
          genreID
          createdAt
          updatedAt
        }
        nextToken
      }
      Finished {
        items {
          id
          type
          userID
          storyID
          createdAt
          nsfw
          genreID
          updatedAt
        }
        nextToken
      }
      sampleUri
      narratorText
      accents
      voice
      artistText
      artStyles
      narratorActiveAt
      artistActiveAt
      plan
      messageSent {
        items {
          id
          type
          title
          subtitle
          content
          userID
          otherUserID
          createdAt
          isReadbyUser
          isReadByOtherUser
          request
          docID
          updatedAt
          status
        }
        nextToken
      }
      messageRec {
        items {
          id
          type
          title
          subtitle
          content
          userID
          otherUserID
          createdAt
          isReadbyUser
          isReadByOtherUser
          request
          docID
          updatedAt
          status
        }
        nextToken
      }
      prompts {
        items {
          id
          type
          userID
          prompt
          nsfw
          createdAt
          updatedAt
          count
          upvote
          approved
        }
        nextToken
      }
      savedPrompts {
        items {
          id
          type
          userID
          promptID
          createdAt
          updatedAt
        }
        nextToken
      }
      inProgressStories {
        items {
          id
          type
          userID
          storyID
          createdAt
          updatedAt
          time
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateFollowingConn = /* GraphQL */ `
  subscription OnCreateFollowingConn {
    onCreateFollowingConn {
      id
      type
      followerID
      authorID
      author {
        type
        id
        name
        email
        imageUri
        bio
        authored {
          nextToken
        }
        narrated {
          nextToken
        }
        sharedAssets {
          nextToken
        }
        sharedImageAssets {
          nextToken
        }
        sharedWithAssets {
          nextToken
        }
        sharedWithImageAssets {
          nextToken
        }
        art {
          nextToken
        }
        numAuthored
        pseudonym
        narratorPseudo
        artistPseudo
        birthdate
        isPublisher
        isNarrator
        isArtist
        topthree
        following {
          nextToken
        }
        followers {
          nextToken
        }
        Pinned {
          nextToken
        }
        Rated {
          nextToken
        }
        Finished {
          nextToken
        }
        sampleUri
        narratorText
        accents
        voice
        artistText
        artStyles
        narratorActiveAt
        artistActiveAt
        plan
        messageSent {
          nextToken
        }
        messageRec {
          nextToken
        }
        prompts {
          nextToken
        }
        savedPrompts {
          nextToken
        }
        inProgressStories {
          nextToken
        }
        createdAt
        updatedAt
      }
      follower {
        type
        id
        name
        email
        imageUri
        bio
        authored {
          nextToken
        }
        narrated {
          nextToken
        }
        sharedAssets {
          nextToken
        }
        sharedImageAssets {
          nextToken
        }
        sharedWithAssets {
          nextToken
        }
        sharedWithImageAssets {
          nextToken
        }
        art {
          nextToken
        }
        numAuthored
        pseudonym
        narratorPseudo
        artistPseudo
        birthdate
        isPublisher
        isNarrator
        isArtist
        topthree
        following {
          nextToken
        }
        followers {
          nextToken
        }
        Pinned {
          nextToken
        }
        Rated {
          nextToken
        }
        Finished {
          nextToken
        }
        sampleUri
        narratorText
        accents
        voice
        artistText
        artStyles
        narratorActiveAt
        artistActiveAt
        plan
        messageSent {
          nextToken
        }
        messageRec {
          nextToken
        }
        prompts {
          nextToken
        }
        savedPrompts {
          nextToken
        }
        inProgressStories {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateFollowingConn = /* GraphQL */ `
  subscription OnUpdateFollowingConn {
    onUpdateFollowingConn {
      id
      type
      followerID
      authorID
      author {
        type
        id
        name
        email
        imageUri
        bio
        authored {
          nextToken
        }
        narrated {
          nextToken
        }
        sharedAssets {
          nextToken
        }
        sharedImageAssets {
          nextToken
        }
        sharedWithAssets {
          nextToken
        }
        sharedWithImageAssets {
          nextToken
        }
        art {
          nextToken
        }
        numAuthored
        pseudonym
        narratorPseudo
        artistPseudo
        birthdate
        isPublisher
        isNarrator
        isArtist
        topthree
        following {
          nextToken
        }
        followers {
          nextToken
        }
        Pinned {
          nextToken
        }
        Rated {
          nextToken
        }
        Finished {
          nextToken
        }
        sampleUri
        narratorText
        accents
        voice
        artistText
        artStyles
        narratorActiveAt
        artistActiveAt
        plan
        messageSent {
          nextToken
        }
        messageRec {
          nextToken
        }
        prompts {
          nextToken
        }
        savedPrompts {
          nextToken
        }
        inProgressStories {
          nextToken
        }
        createdAt
        updatedAt
      }
      follower {
        type
        id
        name
        email
        imageUri
        bio
        authored {
          nextToken
        }
        narrated {
          nextToken
        }
        sharedAssets {
          nextToken
        }
        sharedImageAssets {
          nextToken
        }
        sharedWithAssets {
          nextToken
        }
        sharedWithImageAssets {
          nextToken
        }
        art {
          nextToken
        }
        numAuthored
        pseudonym
        narratorPseudo
        artistPseudo
        birthdate
        isPublisher
        isNarrator
        isArtist
        topthree
        following {
          nextToken
        }
        followers {
          nextToken
        }
        Pinned {
          nextToken
        }
        Rated {
          nextToken
        }
        Finished {
          nextToken
        }
        sampleUri
        narratorText
        accents
        voice
        artistText
        artStyles
        narratorActiveAt
        artistActiveAt
        plan
        messageSent {
          nextToken
        }
        messageRec {
          nextToken
        }
        prompts {
          nextToken
        }
        savedPrompts {
          nextToken
        }
        inProgressStories {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteFollowingConn = /* GraphQL */ `
  subscription OnDeleteFollowingConn {
    onDeleteFollowingConn {
      id
      type
      followerID
      authorID
      author {
        type
        id
        name
        email
        imageUri
        bio
        authored {
          nextToken
        }
        narrated {
          nextToken
        }
        sharedAssets {
          nextToken
        }
        sharedImageAssets {
          nextToken
        }
        sharedWithAssets {
          nextToken
        }
        sharedWithImageAssets {
          nextToken
        }
        art {
          nextToken
        }
        numAuthored
        pseudonym
        narratorPseudo
        artistPseudo
        birthdate
        isPublisher
        isNarrator
        isArtist
        topthree
        following {
          nextToken
        }
        followers {
          nextToken
        }
        Pinned {
          nextToken
        }
        Rated {
          nextToken
        }
        Finished {
          nextToken
        }
        sampleUri
        narratorText
        accents
        voice
        artistText
        artStyles
        narratorActiveAt
        artistActiveAt
        plan
        messageSent {
          nextToken
        }
        messageRec {
          nextToken
        }
        prompts {
          nextToken
        }
        savedPrompts {
          nextToken
        }
        inProgressStories {
          nextToken
        }
        createdAt
        updatedAt
      }
      follower {
        type
        id
        name
        email
        imageUri
        bio
        authored {
          nextToken
        }
        narrated {
          nextToken
        }
        sharedAssets {
          nextToken
        }
        sharedImageAssets {
          nextToken
        }
        sharedWithAssets {
          nextToken
        }
        sharedWithImageAssets {
          nextToken
        }
        art {
          nextToken
        }
        numAuthored
        pseudonym
        narratorPseudo
        artistPseudo
        birthdate
        isPublisher
        isNarrator
        isArtist
        topthree
        following {
          nextToken
        }
        followers {
          nextToken
        }
        Pinned {
          nextToken
        }
        Rated {
          nextToken
        }
        Finished {
          nextToken
        }
        sampleUri
        narratorText
        accents
        voice
        artistText
        artStyles
        narratorActiveAt
        artistActiveAt
        plan
        messageSent {
          nextToken
        }
        messageRec {
          nextToken
        }
        prompts {
          nextToken
        }
        savedPrompts {
          nextToken
        }
        inProgressStories {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePinnedStory = /* GraphQL */ `
  subscription OnCreatePinnedStory {
    onCreatePinnedStory {
      id
      type
      userID
      user {
        type
        id
        name
        email
        imageUri
        bio
        authored {
          nextToken
        }
        narrated {
          nextToken
        }
        sharedAssets {
          nextToken
        }
        sharedImageAssets {
          nextToken
        }
        sharedWithAssets {
          nextToken
        }
        sharedWithImageAssets {
          nextToken
        }
        art {
          nextToken
        }
        numAuthored
        pseudonym
        narratorPseudo
        artistPseudo
        birthdate
        isPublisher
        isNarrator
        isArtist
        topthree
        following {
          nextToken
        }
        followers {
          nextToken
        }
        Pinned {
          nextToken
        }
        Rated {
          nextToken
        }
        Finished {
          nextToken
        }
        sampleUri
        narratorText
        accents
        voice
        artistText
        artStyles
        narratorActiveAt
        artistActiveAt
        plan
        messageSent {
          nextToken
        }
        messageRec {
          nextToken
        }
        prompts {
          nextToken
        }
        savedPrompts {
          nextToken
        }
        inProgressStories {
          nextToken
        }
        createdAt
        updatedAt
      }
      storyID
      story {
        id
        type
        title
        imageUri
        audioUri
        user {
          type
          id
          name
          email
          imageUri
          bio
          numAuthored
          pseudonym
          narratorPseudo
          artistPseudo
          birthdate
          isPublisher
          isNarrator
          isArtist
          topthree
          sampleUri
          narratorText
          accents
          voice
          artistText
          artStyles
          narratorActiveAt
          artistActiveAt
          plan
          createdAt
          updatedAt
        }
        userID
        author
        authorID
        narrator
        narratorUser {
          type
          id
          name
          email
          imageUri
          bio
          numAuthored
          pseudonym
          narratorPseudo
          artistPseudo
          birthdate
          isPublisher
          isNarrator
          isArtist
          topthree
          sampleUri
          narratorText
          accents
          voice
          artistText
          artStyles
          narratorActiveAt
          artistActiveAt
          plan
          createdAt
          updatedAt
        }
        narratorID
        artistName
        artist {
          type
          id
          name
          email
          imageUri
          bio
          numAuthored
          pseudonym
          narratorPseudo
          artistPseudo
          birthdate
          isPublisher
          isNarrator
          isArtist
          topthree
          sampleUri
          narratorText
          accents
          voice
          artistText
          artStyles
          narratorActiveAt
          artistActiveAt
          plan
          createdAt
          updatedAt
        }
        artistID
        time
        summary
        description
        nsfw
        comments {
          nextToken
        }
        tags {
          nextToken
        }
        ratingAvg
        ratingAmt
        rated {
          nextToken
        }
        genreID
        genre {
          id
          genre
          icon
          PrimaryColor
          SecondaryColor
          imageUri
          createdAt
          updatedAt
        }
        hidden
        approved
        createdAt
        updatedAt
        numListens
        flag {
          nextToken
        }
        promptID
        prompt {
          id
          type
          userID
          prompt
          nsfw
          createdAt
          updatedAt
          count
          upvote
          approved
        }
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePinnedStory = /* GraphQL */ `
  subscription OnUpdatePinnedStory {
    onUpdatePinnedStory {
      id
      type
      userID
      user {
        type
        id
        name
        email
        imageUri
        bio
        authored {
          nextToken
        }
        narrated {
          nextToken
        }
        sharedAssets {
          nextToken
        }
        sharedImageAssets {
          nextToken
        }
        sharedWithAssets {
          nextToken
        }
        sharedWithImageAssets {
          nextToken
        }
        art {
          nextToken
        }
        numAuthored
        pseudonym
        narratorPseudo
        artistPseudo
        birthdate
        isPublisher
        isNarrator
        isArtist
        topthree
        following {
          nextToken
        }
        followers {
          nextToken
        }
        Pinned {
          nextToken
        }
        Rated {
          nextToken
        }
        Finished {
          nextToken
        }
        sampleUri
        narratorText
        accents
        voice
        artistText
        artStyles
        narratorActiveAt
        artistActiveAt
        plan
        messageSent {
          nextToken
        }
        messageRec {
          nextToken
        }
        prompts {
          nextToken
        }
        savedPrompts {
          nextToken
        }
        inProgressStories {
          nextToken
        }
        createdAt
        updatedAt
      }
      storyID
      story {
        id
        type
        title
        imageUri
        audioUri
        user {
          type
          id
          name
          email
          imageUri
          bio
          numAuthored
          pseudonym
          narratorPseudo
          artistPseudo
          birthdate
          isPublisher
          isNarrator
          isArtist
          topthree
          sampleUri
          narratorText
          accents
          voice
          artistText
          artStyles
          narratorActiveAt
          artistActiveAt
          plan
          createdAt
          updatedAt
        }
        userID
        author
        authorID
        narrator
        narratorUser {
          type
          id
          name
          email
          imageUri
          bio
          numAuthored
          pseudonym
          narratorPseudo
          artistPseudo
          birthdate
          isPublisher
          isNarrator
          isArtist
          topthree
          sampleUri
          narratorText
          accents
          voice
          artistText
          artStyles
          narratorActiveAt
          artistActiveAt
          plan
          createdAt
          updatedAt
        }
        narratorID
        artistName
        artist {
          type
          id
          name
          email
          imageUri
          bio
          numAuthored
          pseudonym
          narratorPseudo
          artistPseudo
          birthdate
          isPublisher
          isNarrator
          isArtist
          topthree
          sampleUri
          narratorText
          accents
          voice
          artistText
          artStyles
          narratorActiveAt
          artistActiveAt
          plan
          createdAt
          updatedAt
        }
        artistID
        time
        summary
        description
        nsfw
        comments {
          nextToken
        }
        tags {
          nextToken
        }
        ratingAvg
        ratingAmt
        rated {
          nextToken
        }
        genreID
        genre {
          id
          genre
          icon
          PrimaryColor
          SecondaryColor
          imageUri
          createdAt
          updatedAt
        }
        hidden
        approved
        createdAt
        updatedAt
        numListens
        flag {
          nextToken
        }
        promptID
        prompt {
          id
          type
          userID
          prompt
          nsfw
          createdAt
          updatedAt
          count
          upvote
          approved
        }
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePinnedStory = /* GraphQL */ `
  subscription OnDeletePinnedStory {
    onDeletePinnedStory {
      id
      type
      userID
      user {
        type
        id
        name
        email
        imageUri
        bio
        authored {
          nextToken
        }
        narrated {
          nextToken
        }
        sharedAssets {
          nextToken
        }
        sharedImageAssets {
          nextToken
        }
        sharedWithAssets {
          nextToken
        }
        sharedWithImageAssets {
          nextToken
        }
        art {
          nextToken
        }
        numAuthored
        pseudonym
        narratorPseudo
        artistPseudo
        birthdate
        isPublisher
        isNarrator
        isArtist
        topthree
        following {
          nextToken
        }
        followers {
          nextToken
        }
        Pinned {
          nextToken
        }
        Rated {
          nextToken
        }
        Finished {
          nextToken
        }
        sampleUri
        narratorText
        accents
        voice
        artistText
        artStyles
        narratorActiveAt
        artistActiveAt
        plan
        messageSent {
          nextToken
        }
        messageRec {
          nextToken
        }
        prompts {
          nextToken
        }
        savedPrompts {
          nextToken
        }
        inProgressStories {
          nextToken
        }
        createdAt
        updatedAt
      }
      storyID
      story {
        id
        type
        title
        imageUri
        audioUri
        user {
          type
          id
          name
          email
          imageUri
          bio
          numAuthored
          pseudonym
          narratorPseudo
          artistPseudo
          birthdate
          isPublisher
          isNarrator
          isArtist
          topthree
          sampleUri
          narratorText
          accents
          voice
          artistText
          artStyles
          narratorActiveAt
          artistActiveAt
          plan
          createdAt
          updatedAt
        }
        userID
        author
        authorID
        narrator
        narratorUser {
          type
          id
          name
          email
          imageUri
          bio
          numAuthored
          pseudonym
          narratorPseudo
          artistPseudo
          birthdate
          isPublisher
          isNarrator
          isArtist
          topthree
          sampleUri
          narratorText
          accents
          voice
          artistText
          artStyles
          narratorActiveAt
          artistActiveAt
          plan
          createdAt
          updatedAt
        }
        narratorID
        artistName
        artist {
          type
          id
          name
          email
          imageUri
          bio
          numAuthored
          pseudonym
          narratorPseudo
          artistPseudo
          birthdate
          isPublisher
          isNarrator
          isArtist
          topthree
          sampleUri
          narratorText
          accents
          voice
          artistText
          artStyles
          narratorActiveAt
          artistActiveAt
          plan
          createdAt
          updatedAt
        }
        artistID
        time
        summary
        description
        nsfw
        comments {
          nextToken
        }
        tags {
          nextToken
        }
        ratingAvg
        ratingAmt
        rated {
          nextToken
        }
        genreID
        genre {
          id
          genre
          icon
          PrimaryColor
          SecondaryColor
          imageUri
          createdAt
          updatedAt
        }
        hidden
        approved
        createdAt
        updatedAt
        numListens
        flag {
          nextToken
        }
        promptID
        prompt {
          id
          type
          userID
          prompt
          nsfw
          createdAt
          updatedAt
          count
          upvote
          approved
        }
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateFinishedStory = /* GraphQL */ `
  subscription OnCreateFinishedStory {
    onCreateFinishedStory {
      id
      type
      userID
      user {
        type
        id
        name
        email
        imageUri
        bio
        authored {
          nextToken
        }
        narrated {
          nextToken
        }
        sharedAssets {
          nextToken
        }
        sharedImageAssets {
          nextToken
        }
        sharedWithAssets {
          nextToken
        }
        sharedWithImageAssets {
          nextToken
        }
        art {
          nextToken
        }
        numAuthored
        pseudonym
        narratorPseudo
        artistPseudo
        birthdate
        isPublisher
        isNarrator
        isArtist
        topthree
        following {
          nextToken
        }
        followers {
          nextToken
        }
        Pinned {
          nextToken
        }
        Rated {
          nextToken
        }
        Finished {
          nextToken
        }
        sampleUri
        narratorText
        accents
        voice
        artistText
        artStyles
        narratorActiveAt
        artistActiveAt
        plan
        messageSent {
          nextToken
        }
        messageRec {
          nextToken
        }
        prompts {
          nextToken
        }
        savedPrompts {
          nextToken
        }
        inProgressStories {
          nextToken
        }
        createdAt
        updatedAt
      }
      storyID
      story {
        id
        type
        title
        imageUri
        audioUri
        user {
          type
          id
          name
          email
          imageUri
          bio
          numAuthored
          pseudonym
          narratorPseudo
          artistPseudo
          birthdate
          isPublisher
          isNarrator
          isArtist
          topthree
          sampleUri
          narratorText
          accents
          voice
          artistText
          artStyles
          narratorActiveAt
          artistActiveAt
          plan
          createdAt
          updatedAt
        }
        userID
        author
        authorID
        narrator
        narratorUser {
          type
          id
          name
          email
          imageUri
          bio
          numAuthored
          pseudonym
          narratorPseudo
          artistPseudo
          birthdate
          isPublisher
          isNarrator
          isArtist
          topthree
          sampleUri
          narratorText
          accents
          voice
          artistText
          artStyles
          narratorActiveAt
          artistActiveAt
          plan
          createdAt
          updatedAt
        }
        narratorID
        artistName
        artist {
          type
          id
          name
          email
          imageUri
          bio
          numAuthored
          pseudonym
          narratorPseudo
          artistPseudo
          birthdate
          isPublisher
          isNarrator
          isArtist
          topthree
          sampleUri
          narratorText
          accents
          voice
          artistText
          artStyles
          narratorActiveAt
          artistActiveAt
          plan
          createdAt
          updatedAt
        }
        artistID
        time
        summary
        description
        nsfw
        comments {
          nextToken
        }
        tags {
          nextToken
        }
        ratingAvg
        ratingAmt
        rated {
          nextToken
        }
        genreID
        genre {
          id
          genre
          icon
          PrimaryColor
          SecondaryColor
          imageUri
          createdAt
          updatedAt
        }
        hidden
        approved
        createdAt
        updatedAt
        numListens
        flag {
          nextToken
        }
        promptID
        prompt {
          id
          type
          userID
          prompt
          nsfw
          createdAt
          updatedAt
          count
          upvote
          approved
        }
      }
      createdAt
      nsfw
      genreID
      genre {
        id
        genre
        icon
        PrimaryColor
        SecondaryColor
        imageUri
        tags {
          nextToken
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const onUpdateFinishedStory = /* GraphQL */ `
  subscription OnUpdateFinishedStory {
    onUpdateFinishedStory {
      id
      type
      userID
      user {
        type
        id
        name
        email
        imageUri
        bio
        authored {
          nextToken
        }
        narrated {
          nextToken
        }
        sharedAssets {
          nextToken
        }
        sharedImageAssets {
          nextToken
        }
        sharedWithAssets {
          nextToken
        }
        sharedWithImageAssets {
          nextToken
        }
        art {
          nextToken
        }
        numAuthored
        pseudonym
        narratorPseudo
        artistPseudo
        birthdate
        isPublisher
        isNarrator
        isArtist
        topthree
        following {
          nextToken
        }
        followers {
          nextToken
        }
        Pinned {
          nextToken
        }
        Rated {
          nextToken
        }
        Finished {
          nextToken
        }
        sampleUri
        narratorText
        accents
        voice
        artistText
        artStyles
        narratorActiveAt
        artistActiveAt
        plan
        messageSent {
          nextToken
        }
        messageRec {
          nextToken
        }
        prompts {
          nextToken
        }
        savedPrompts {
          nextToken
        }
        inProgressStories {
          nextToken
        }
        createdAt
        updatedAt
      }
      storyID
      story {
        id
        type
        title
        imageUri
        audioUri
        user {
          type
          id
          name
          email
          imageUri
          bio
          numAuthored
          pseudonym
          narratorPseudo
          artistPseudo
          birthdate
          isPublisher
          isNarrator
          isArtist
          topthree
          sampleUri
          narratorText
          accents
          voice
          artistText
          artStyles
          narratorActiveAt
          artistActiveAt
          plan
          createdAt
          updatedAt
        }
        userID
        author
        authorID
        narrator
        narratorUser {
          type
          id
          name
          email
          imageUri
          bio
          numAuthored
          pseudonym
          narratorPseudo
          artistPseudo
          birthdate
          isPublisher
          isNarrator
          isArtist
          topthree
          sampleUri
          narratorText
          accents
          voice
          artistText
          artStyles
          narratorActiveAt
          artistActiveAt
          plan
          createdAt
          updatedAt
        }
        narratorID
        artistName
        artist {
          type
          id
          name
          email
          imageUri
          bio
          numAuthored
          pseudonym
          narratorPseudo
          artistPseudo
          birthdate
          isPublisher
          isNarrator
          isArtist
          topthree
          sampleUri
          narratorText
          accents
          voice
          artistText
          artStyles
          narratorActiveAt
          artistActiveAt
          plan
          createdAt
          updatedAt
        }
        artistID
        time
        summary
        description
        nsfw
        comments {
          nextToken
        }
        tags {
          nextToken
        }
        ratingAvg
        ratingAmt
        rated {
          nextToken
        }
        genreID
        genre {
          id
          genre
          icon
          PrimaryColor
          SecondaryColor
          imageUri
          createdAt
          updatedAt
        }
        hidden
        approved
        createdAt
        updatedAt
        numListens
        flag {
          nextToken
        }
        promptID
        prompt {
          id
          type
          userID
          prompt
          nsfw
          createdAt
          updatedAt
          count
          upvote
          approved
        }
      }
      createdAt
      nsfw
      genreID
      genre {
        id
        genre
        icon
        PrimaryColor
        SecondaryColor
        imageUri
        tags {
          nextToken
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const onDeleteFinishedStory = /* GraphQL */ `
  subscription OnDeleteFinishedStory {
    onDeleteFinishedStory {
      id
      type
      userID
      user {
        type
        id
        name
        email
        imageUri
        bio
        authored {
          nextToken
        }
        narrated {
          nextToken
        }
        sharedAssets {
          nextToken
        }
        sharedImageAssets {
          nextToken
        }
        sharedWithAssets {
          nextToken
        }
        sharedWithImageAssets {
          nextToken
        }
        art {
          nextToken
        }
        numAuthored
        pseudonym
        narratorPseudo
        artistPseudo
        birthdate
        isPublisher
        isNarrator
        isArtist
        topthree
        following {
          nextToken
        }
        followers {
          nextToken
        }
        Pinned {
          nextToken
        }
        Rated {
          nextToken
        }
        Finished {
          nextToken
        }
        sampleUri
        narratorText
        accents
        voice
        artistText
        artStyles
        narratorActiveAt
        artistActiveAt
        plan
        messageSent {
          nextToken
        }
        messageRec {
          nextToken
        }
        prompts {
          nextToken
        }
        savedPrompts {
          nextToken
        }
        inProgressStories {
          nextToken
        }
        createdAt
        updatedAt
      }
      storyID
      story {
        id
        type
        title
        imageUri
        audioUri
        user {
          type
          id
          name
          email
          imageUri
          bio
          numAuthored
          pseudonym
          narratorPseudo
          artistPseudo
          birthdate
          isPublisher
          isNarrator
          isArtist
          topthree
          sampleUri
          narratorText
          accents
          voice
          artistText
          artStyles
          narratorActiveAt
          artistActiveAt
          plan
          createdAt
          updatedAt
        }
        userID
        author
        authorID
        narrator
        narratorUser {
          type
          id
          name
          email
          imageUri
          bio
          numAuthored
          pseudonym
          narratorPseudo
          artistPseudo
          birthdate
          isPublisher
          isNarrator
          isArtist
          topthree
          sampleUri
          narratorText
          accents
          voice
          artistText
          artStyles
          narratorActiveAt
          artistActiveAt
          plan
          createdAt
          updatedAt
        }
        narratorID
        artistName
        artist {
          type
          id
          name
          email
          imageUri
          bio
          numAuthored
          pseudonym
          narratorPseudo
          artistPseudo
          birthdate
          isPublisher
          isNarrator
          isArtist
          topthree
          sampleUri
          narratorText
          accents
          voice
          artistText
          artStyles
          narratorActiveAt
          artistActiveAt
          plan
          createdAt
          updatedAt
        }
        artistID
        time
        summary
        description
        nsfw
        comments {
          nextToken
        }
        tags {
          nextToken
        }
        ratingAvg
        ratingAmt
        rated {
          nextToken
        }
        genreID
        genre {
          id
          genre
          icon
          PrimaryColor
          SecondaryColor
          imageUri
          createdAt
          updatedAt
        }
        hidden
        approved
        createdAt
        updatedAt
        numListens
        flag {
          nextToken
        }
        promptID
        prompt {
          id
          type
          userID
          prompt
          nsfw
          createdAt
          updatedAt
          count
          upvote
          approved
        }
      }
      createdAt
      nsfw
      genreID
      genre {
        id
        genre
        icon
        PrimaryColor
        SecondaryColor
        imageUri
        tags {
          nextToken
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const onCreateStory = /* GraphQL */ `
  subscription OnCreateStory {
    onCreateStory {
      id
      type
      title
      imageUri
      audioUri
      user {
        type
        id
        name
        email
        imageUri
        bio
        authored {
          nextToken
        }
        narrated {
          nextToken
        }
        sharedAssets {
          nextToken
        }
        sharedImageAssets {
          nextToken
        }
        sharedWithAssets {
          nextToken
        }
        sharedWithImageAssets {
          nextToken
        }
        art {
          nextToken
        }
        numAuthored
        pseudonym
        narratorPseudo
        artistPseudo
        birthdate
        isPublisher
        isNarrator
        isArtist
        topthree
        following {
          nextToken
        }
        followers {
          nextToken
        }
        Pinned {
          nextToken
        }
        Rated {
          nextToken
        }
        Finished {
          nextToken
        }
        sampleUri
        narratorText
        accents
        voice
        artistText
        artStyles
        narratorActiveAt
        artistActiveAt
        plan
        messageSent {
          nextToken
        }
        messageRec {
          nextToken
        }
        prompts {
          nextToken
        }
        savedPrompts {
          nextToken
        }
        inProgressStories {
          nextToken
        }
        createdAt
        updatedAt
      }
      userID
      author
      authorID
      narrator
      narratorUser {
        type
        id
        name
        email
        imageUri
        bio
        authored {
          nextToken
        }
        narrated {
          nextToken
        }
        sharedAssets {
          nextToken
        }
        sharedImageAssets {
          nextToken
        }
        sharedWithAssets {
          nextToken
        }
        sharedWithImageAssets {
          nextToken
        }
        art {
          nextToken
        }
        numAuthored
        pseudonym
        narratorPseudo
        artistPseudo
        birthdate
        isPublisher
        isNarrator
        isArtist
        topthree
        following {
          nextToken
        }
        followers {
          nextToken
        }
        Pinned {
          nextToken
        }
        Rated {
          nextToken
        }
        Finished {
          nextToken
        }
        sampleUri
        narratorText
        accents
        voice
        artistText
        artStyles
        narratorActiveAt
        artistActiveAt
        plan
        messageSent {
          nextToken
        }
        messageRec {
          nextToken
        }
        prompts {
          nextToken
        }
        savedPrompts {
          nextToken
        }
        inProgressStories {
          nextToken
        }
        createdAt
        updatedAt
      }
      narratorID
      artistName
      artist {
        type
        id
        name
        email
        imageUri
        bio
        authored {
          nextToken
        }
        narrated {
          nextToken
        }
        sharedAssets {
          nextToken
        }
        sharedImageAssets {
          nextToken
        }
        sharedWithAssets {
          nextToken
        }
        sharedWithImageAssets {
          nextToken
        }
        art {
          nextToken
        }
        numAuthored
        pseudonym
        narratorPseudo
        artistPseudo
        birthdate
        isPublisher
        isNarrator
        isArtist
        topthree
        following {
          nextToken
        }
        followers {
          nextToken
        }
        Pinned {
          nextToken
        }
        Rated {
          nextToken
        }
        Finished {
          nextToken
        }
        sampleUri
        narratorText
        accents
        voice
        artistText
        artStyles
        narratorActiveAt
        artistActiveAt
        plan
        messageSent {
          nextToken
        }
        messageRec {
          nextToken
        }
        prompts {
          nextToken
        }
        savedPrompts {
          nextToken
        }
        inProgressStories {
          nextToken
        }
        createdAt
        updatedAt
      }
      artistID
      time
      summary
      description
      nsfw
      comments {
        items {
          id
          type
          storyID
          content
          userID
          createdAt
          approved
          updatedAt
        }
        nextToken
      }
      tags {
        items {
          id
          storyID
          tagID
          createdAt
          updatedAt
        }
        nextToken
      }
      ratingAvg
      ratingAmt
      rated {
        items {
          id
          type
          storyID
          userID
          rating
          nsfw
          genreID
          createdAt
          updatedAt
        }
        nextToken
      }
      genreID
      genre {
        id
        genre
        icon
        PrimaryColor
        SecondaryColor
        imageUri
        tags {
          nextToken
        }
        createdAt
        updatedAt
      }
      hidden
      approved
      createdAt
      updatedAt
      numListens
      flag {
        items {
          id
          type
          storyID
          flagTypes
          userID
          Status
          createdAt
          updatedAt
        }
        nextToken
      }
      promptID
      prompt {
        id
        type
        stories {
          nextToken
        }
        userID
        user {
          type
          id
          name
          email
          imageUri
          bio
          numAuthored
          pseudonym
          narratorPseudo
          artistPseudo
          birthdate
          isPublisher
          isNarrator
          isArtist
          topthree
          sampleUri
          narratorText
          accents
          voice
          artistText
          artStyles
          narratorActiveAt
          artistActiveAt
          plan
          createdAt
          updatedAt
        }
        prompt
        nsfw
        createdAt
        updatedAt
        count
        upvote
        approved
      }
    }
  }
`;
export const onUpdateStory = /* GraphQL */ `
  subscription OnUpdateStory {
    onUpdateStory {
      id
      type
      title
      imageUri
      audioUri
      user {
        type
        id
        name
        email
        imageUri
        bio
        authored {
          nextToken
        }
        narrated {
          nextToken
        }
        sharedAssets {
          nextToken
        }
        sharedImageAssets {
          nextToken
        }
        sharedWithAssets {
          nextToken
        }
        sharedWithImageAssets {
          nextToken
        }
        art {
          nextToken
        }
        numAuthored
        pseudonym
        narratorPseudo
        artistPseudo
        birthdate
        isPublisher
        isNarrator
        isArtist
        topthree
        following {
          nextToken
        }
        followers {
          nextToken
        }
        Pinned {
          nextToken
        }
        Rated {
          nextToken
        }
        Finished {
          nextToken
        }
        sampleUri
        narratorText
        accents
        voice
        artistText
        artStyles
        narratorActiveAt
        artistActiveAt
        plan
        messageSent {
          nextToken
        }
        messageRec {
          nextToken
        }
        prompts {
          nextToken
        }
        savedPrompts {
          nextToken
        }
        inProgressStories {
          nextToken
        }
        createdAt
        updatedAt
      }
      userID
      author
      authorID
      narrator
      narratorUser {
        type
        id
        name
        email
        imageUri
        bio
        authored {
          nextToken
        }
        narrated {
          nextToken
        }
        sharedAssets {
          nextToken
        }
        sharedImageAssets {
          nextToken
        }
        sharedWithAssets {
          nextToken
        }
        sharedWithImageAssets {
          nextToken
        }
        art {
          nextToken
        }
        numAuthored
        pseudonym
        narratorPseudo
        artistPseudo
        birthdate
        isPublisher
        isNarrator
        isArtist
        topthree
        following {
          nextToken
        }
        followers {
          nextToken
        }
        Pinned {
          nextToken
        }
        Rated {
          nextToken
        }
        Finished {
          nextToken
        }
        sampleUri
        narratorText
        accents
        voice
        artistText
        artStyles
        narratorActiveAt
        artistActiveAt
        plan
        messageSent {
          nextToken
        }
        messageRec {
          nextToken
        }
        prompts {
          nextToken
        }
        savedPrompts {
          nextToken
        }
        inProgressStories {
          nextToken
        }
        createdAt
        updatedAt
      }
      narratorID
      artistName
      artist {
        type
        id
        name
        email
        imageUri
        bio
        authored {
          nextToken
        }
        narrated {
          nextToken
        }
        sharedAssets {
          nextToken
        }
        sharedImageAssets {
          nextToken
        }
        sharedWithAssets {
          nextToken
        }
        sharedWithImageAssets {
          nextToken
        }
        art {
          nextToken
        }
        numAuthored
        pseudonym
        narratorPseudo
        artistPseudo
        birthdate
        isPublisher
        isNarrator
        isArtist
        topthree
        following {
          nextToken
        }
        followers {
          nextToken
        }
        Pinned {
          nextToken
        }
        Rated {
          nextToken
        }
        Finished {
          nextToken
        }
        sampleUri
        narratorText
        accents
        voice
        artistText
        artStyles
        narratorActiveAt
        artistActiveAt
        plan
        messageSent {
          nextToken
        }
        messageRec {
          nextToken
        }
        prompts {
          nextToken
        }
        savedPrompts {
          nextToken
        }
        inProgressStories {
          nextToken
        }
        createdAt
        updatedAt
      }
      artistID
      time
      summary
      description
      nsfw
      comments {
        items {
          id
          type
          storyID
          content
          userID
          createdAt
          approved
          updatedAt
        }
        nextToken
      }
      tags {
        items {
          id
          storyID
          tagID
          createdAt
          updatedAt
        }
        nextToken
      }
      ratingAvg
      ratingAmt
      rated {
        items {
          id
          type
          storyID
          userID
          rating
          nsfw
          genreID
          createdAt
          updatedAt
        }
        nextToken
      }
      genreID
      genre {
        id
        genre
        icon
        PrimaryColor
        SecondaryColor
        imageUri
        tags {
          nextToken
        }
        createdAt
        updatedAt
      }
      hidden
      approved
      createdAt
      updatedAt
      numListens
      flag {
        items {
          id
          type
          storyID
          flagTypes
          userID
          Status
          createdAt
          updatedAt
        }
        nextToken
      }
      promptID
      prompt {
        id
        type
        stories {
          nextToken
        }
        userID
        user {
          type
          id
          name
          email
          imageUri
          bio
          numAuthored
          pseudonym
          narratorPseudo
          artistPseudo
          birthdate
          isPublisher
          isNarrator
          isArtist
          topthree
          sampleUri
          narratorText
          accents
          voice
          artistText
          artStyles
          narratorActiveAt
          artistActiveAt
          plan
          createdAt
          updatedAt
        }
        prompt
        nsfw
        createdAt
        updatedAt
        count
        upvote
        approved
      }
    }
  }
`;
export const onDeleteStory = /* GraphQL */ `
  subscription OnDeleteStory {
    onDeleteStory {
      id
      type
      title
      imageUri
      audioUri
      user {
        type
        id
        name
        email
        imageUri
        bio
        authored {
          nextToken
        }
        narrated {
          nextToken
        }
        sharedAssets {
          nextToken
        }
        sharedImageAssets {
          nextToken
        }
        sharedWithAssets {
          nextToken
        }
        sharedWithImageAssets {
          nextToken
        }
        art {
          nextToken
        }
        numAuthored
        pseudonym
        narratorPseudo
        artistPseudo
        birthdate
        isPublisher
        isNarrator
        isArtist
        topthree
        following {
          nextToken
        }
        followers {
          nextToken
        }
        Pinned {
          nextToken
        }
        Rated {
          nextToken
        }
        Finished {
          nextToken
        }
        sampleUri
        narratorText
        accents
        voice
        artistText
        artStyles
        narratorActiveAt
        artistActiveAt
        plan
        messageSent {
          nextToken
        }
        messageRec {
          nextToken
        }
        prompts {
          nextToken
        }
        savedPrompts {
          nextToken
        }
        inProgressStories {
          nextToken
        }
        createdAt
        updatedAt
      }
      userID
      author
      authorID
      narrator
      narratorUser {
        type
        id
        name
        email
        imageUri
        bio
        authored {
          nextToken
        }
        narrated {
          nextToken
        }
        sharedAssets {
          nextToken
        }
        sharedImageAssets {
          nextToken
        }
        sharedWithAssets {
          nextToken
        }
        sharedWithImageAssets {
          nextToken
        }
        art {
          nextToken
        }
        numAuthored
        pseudonym
        narratorPseudo
        artistPseudo
        birthdate
        isPublisher
        isNarrator
        isArtist
        topthree
        following {
          nextToken
        }
        followers {
          nextToken
        }
        Pinned {
          nextToken
        }
        Rated {
          nextToken
        }
        Finished {
          nextToken
        }
        sampleUri
        narratorText
        accents
        voice
        artistText
        artStyles
        narratorActiveAt
        artistActiveAt
        plan
        messageSent {
          nextToken
        }
        messageRec {
          nextToken
        }
        prompts {
          nextToken
        }
        savedPrompts {
          nextToken
        }
        inProgressStories {
          nextToken
        }
        createdAt
        updatedAt
      }
      narratorID
      artistName
      artist {
        type
        id
        name
        email
        imageUri
        bio
        authored {
          nextToken
        }
        narrated {
          nextToken
        }
        sharedAssets {
          nextToken
        }
        sharedImageAssets {
          nextToken
        }
        sharedWithAssets {
          nextToken
        }
        sharedWithImageAssets {
          nextToken
        }
        art {
          nextToken
        }
        numAuthored
        pseudonym
        narratorPseudo
        artistPseudo
        birthdate
        isPublisher
        isNarrator
        isArtist
        topthree
        following {
          nextToken
        }
        followers {
          nextToken
        }
        Pinned {
          nextToken
        }
        Rated {
          nextToken
        }
        Finished {
          nextToken
        }
        sampleUri
        narratorText
        accents
        voice
        artistText
        artStyles
        narratorActiveAt
        artistActiveAt
        plan
        messageSent {
          nextToken
        }
        messageRec {
          nextToken
        }
        prompts {
          nextToken
        }
        savedPrompts {
          nextToken
        }
        inProgressStories {
          nextToken
        }
        createdAt
        updatedAt
      }
      artistID
      time
      summary
      description
      nsfw
      comments {
        items {
          id
          type
          storyID
          content
          userID
          createdAt
          approved
          updatedAt
        }
        nextToken
      }
      tags {
        items {
          id
          storyID
          tagID
          createdAt
          updatedAt
        }
        nextToken
      }
      ratingAvg
      ratingAmt
      rated {
        items {
          id
          type
          storyID
          userID
          rating
          nsfw
          genreID
          createdAt
          updatedAt
        }
        nextToken
      }
      genreID
      genre {
        id
        genre
        icon
        PrimaryColor
        SecondaryColor
        imageUri
        tags {
          nextToken
        }
        createdAt
        updatedAt
      }
      hidden
      approved
      createdAt
      updatedAt
      numListens
      flag {
        items {
          id
          type
          storyID
          flagTypes
          userID
          Status
          createdAt
          updatedAt
        }
        nextToken
      }
      promptID
      prompt {
        id
        type
        stories {
          nextToken
        }
        userID
        user {
          type
          id
          name
          email
          imageUri
          bio
          numAuthored
          pseudonym
          narratorPseudo
          artistPseudo
          birthdate
          isPublisher
          isNarrator
          isArtist
          topthree
          sampleUri
          narratorText
          accents
          voice
          artistText
          artStyles
          narratorActiveAt
          artistActiveAt
          plan
          createdAt
          updatedAt
        }
        prompt
        nsfw
        createdAt
        updatedAt
        count
        upvote
        approved
      }
    }
  }
`;
export const onCreateGenre = /* GraphQL */ `
  subscription OnCreateGenre {
    onCreateGenre {
      id
      genre
      icon
      PrimaryColor
      SecondaryColor
      imageUri
      tags {
        items {
          id
          genreID
          tagID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateGenre = /* GraphQL */ `
  subscription OnUpdateGenre {
    onUpdateGenre {
      id
      genre
      icon
      PrimaryColor
      SecondaryColor
      imageUri
      tags {
        items {
          id
          genreID
          tagID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteGenre = /* GraphQL */ `
  subscription OnDeleteGenre {
    onDeleteGenre {
      id
      genre
      icon
      PrimaryColor
      SecondaryColor
      imageUri
      tags {
        items {
          id
          genreID
          tagID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateImageAsset = /* GraphQL */ `
  subscription OnCreateImageAsset {
    onCreateImageAsset {
      id
      type
      title
      imageUri
      isSample
      user {
        type
        id
        name
        email
        imageUri
        bio
        authored {
          nextToken
        }
        narrated {
          nextToken
        }
        sharedAssets {
          nextToken
        }
        sharedImageAssets {
          nextToken
        }
        sharedWithAssets {
          nextToken
        }
        sharedWithImageAssets {
          nextToken
        }
        art {
          nextToken
        }
        numAuthored
        pseudonym
        narratorPseudo
        artistPseudo
        birthdate
        isPublisher
        isNarrator
        isArtist
        topthree
        following {
          nextToken
        }
        followers {
          nextToken
        }
        Pinned {
          nextToken
        }
        Rated {
          nextToken
        }
        Finished {
          nextToken
        }
        sampleUri
        narratorText
        accents
        voice
        artistText
        artStyles
        narratorActiveAt
        artistActiveAt
        plan
        messageSent {
          nextToken
        }
        messageRec {
          nextToken
        }
        prompts {
          nextToken
        }
        savedPrompts {
          nextToken
        }
        inProgressStories {
          nextToken
        }
        createdAt
        updatedAt
      }
      userID
      sharedUser {
        type
        id
        name
        email
        imageUri
        bio
        authored {
          nextToken
        }
        narrated {
          nextToken
        }
        sharedAssets {
          nextToken
        }
        sharedImageAssets {
          nextToken
        }
        sharedWithAssets {
          nextToken
        }
        sharedWithImageAssets {
          nextToken
        }
        art {
          nextToken
        }
        numAuthored
        pseudonym
        narratorPseudo
        artistPseudo
        birthdate
        isPublisher
        isNarrator
        isArtist
        topthree
        following {
          nextToken
        }
        followers {
          nextToken
        }
        Pinned {
          nextToken
        }
        Rated {
          nextToken
        }
        Finished {
          nextToken
        }
        sampleUri
        narratorText
        accents
        voice
        artistText
        artStyles
        narratorActiveAt
        artistActiveAt
        plan
        messageSent {
          nextToken
        }
        messageRec {
          nextToken
        }
        prompts {
          nextToken
        }
        savedPrompts {
          nextToken
        }
        inProgressStories {
          nextToken
        }
        createdAt
        updatedAt
      }
      sharedUserID
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateImageAsset = /* GraphQL */ `
  subscription OnUpdateImageAsset {
    onUpdateImageAsset {
      id
      type
      title
      imageUri
      isSample
      user {
        type
        id
        name
        email
        imageUri
        bio
        authored {
          nextToken
        }
        narrated {
          nextToken
        }
        sharedAssets {
          nextToken
        }
        sharedImageAssets {
          nextToken
        }
        sharedWithAssets {
          nextToken
        }
        sharedWithImageAssets {
          nextToken
        }
        art {
          nextToken
        }
        numAuthored
        pseudonym
        narratorPseudo
        artistPseudo
        birthdate
        isPublisher
        isNarrator
        isArtist
        topthree
        following {
          nextToken
        }
        followers {
          nextToken
        }
        Pinned {
          nextToken
        }
        Rated {
          nextToken
        }
        Finished {
          nextToken
        }
        sampleUri
        narratorText
        accents
        voice
        artistText
        artStyles
        narratorActiveAt
        artistActiveAt
        plan
        messageSent {
          nextToken
        }
        messageRec {
          nextToken
        }
        prompts {
          nextToken
        }
        savedPrompts {
          nextToken
        }
        inProgressStories {
          nextToken
        }
        createdAt
        updatedAt
      }
      userID
      sharedUser {
        type
        id
        name
        email
        imageUri
        bio
        authored {
          nextToken
        }
        narrated {
          nextToken
        }
        sharedAssets {
          nextToken
        }
        sharedImageAssets {
          nextToken
        }
        sharedWithAssets {
          nextToken
        }
        sharedWithImageAssets {
          nextToken
        }
        art {
          nextToken
        }
        numAuthored
        pseudonym
        narratorPseudo
        artistPseudo
        birthdate
        isPublisher
        isNarrator
        isArtist
        topthree
        following {
          nextToken
        }
        followers {
          nextToken
        }
        Pinned {
          nextToken
        }
        Rated {
          nextToken
        }
        Finished {
          nextToken
        }
        sampleUri
        narratorText
        accents
        voice
        artistText
        artStyles
        narratorActiveAt
        artistActiveAt
        plan
        messageSent {
          nextToken
        }
        messageRec {
          nextToken
        }
        prompts {
          nextToken
        }
        savedPrompts {
          nextToken
        }
        inProgressStories {
          nextToken
        }
        createdAt
        updatedAt
      }
      sharedUserID
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteImageAsset = /* GraphQL */ `
  subscription OnDeleteImageAsset {
    onDeleteImageAsset {
      id
      type
      title
      imageUri
      isSample
      user {
        type
        id
        name
        email
        imageUri
        bio
        authored {
          nextToken
        }
        narrated {
          nextToken
        }
        sharedAssets {
          nextToken
        }
        sharedImageAssets {
          nextToken
        }
        sharedWithAssets {
          nextToken
        }
        sharedWithImageAssets {
          nextToken
        }
        art {
          nextToken
        }
        numAuthored
        pseudonym
        narratorPseudo
        artistPseudo
        birthdate
        isPublisher
        isNarrator
        isArtist
        topthree
        following {
          nextToken
        }
        followers {
          nextToken
        }
        Pinned {
          nextToken
        }
        Rated {
          nextToken
        }
        Finished {
          nextToken
        }
        sampleUri
        narratorText
        accents
        voice
        artistText
        artStyles
        narratorActiveAt
        artistActiveAt
        plan
        messageSent {
          nextToken
        }
        messageRec {
          nextToken
        }
        prompts {
          nextToken
        }
        savedPrompts {
          nextToken
        }
        inProgressStories {
          nextToken
        }
        createdAt
        updatedAt
      }
      userID
      sharedUser {
        type
        id
        name
        email
        imageUri
        bio
        authored {
          nextToken
        }
        narrated {
          nextToken
        }
        sharedAssets {
          nextToken
        }
        sharedImageAssets {
          nextToken
        }
        sharedWithAssets {
          nextToken
        }
        sharedWithImageAssets {
          nextToken
        }
        art {
          nextToken
        }
        numAuthored
        pseudonym
        narratorPseudo
        artistPseudo
        birthdate
        isPublisher
        isNarrator
        isArtist
        topthree
        following {
          nextToken
        }
        followers {
          nextToken
        }
        Pinned {
          nextToken
        }
        Rated {
          nextToken
        }
        Finished {
          nextToken
        }
        sampleUri
        narratorText
        accents
        voice
        artistText
        artStyles
        narratorActiveAt
        artistActiveAt
        plan
        messageSent {
          nextToken
        }
        messageRec {
          nextToken
        }
        prompts {
          nextToken
        }
        savedPrompts {
          nextToken
        }
        inProgressStories {
          nextToken
        }
        createdAt
        updatedAt
      }
      sharedUserID
      createdAt
      updatedAt
    }
  }
`;
export const onCreateDocumentAsset = /* GraphQL */ `
  subscription OnCreateDocumentAsset {
    onCreateDocumentAsset {
      id
      type
      title
      docUri
      user {
        type
        id
        name
        email
        imageUri
        bio
        authored {
          nextToken
        }
        narrated {
          nextToken
        }
        sharedAssets {
          nextToken
        }
        sharedImageAssets {
          nextToken
        }
        sharedWithAssets {
          nextToken
        }
        sharedWithImageAssets {
          nextToken
        }
        art {
          nextToken
        }
        numAuthored
        pseudonym
        narratorPseudo
        artistPseudo
        birthdate
        isPublisher
        isNarrator
        isArtist
        topthree
        following {
          nextToken
        }
        followers {
          nextToken
        }
        Pinned {
          nextToken
        }
        Rated {
          nextToken
        }
        Finished {
          nextToken
        }
        sampleUri
        narratorText
        accents
        voice
        artistText
        artStyles
        narratorActiveAt
        artistActiveAt
        plan
        messageSent {
          nextToken
        }
        messageRec {
          nextToken
        }
        prompts {
          nextToken
        }
        savedPrompts {
          nextToken
        }
        inProgressStories {
          nextToken
        }
        createdAt
        updatedAt
      }
      userID
      sharedUserID
      sharedUser {
        type
        id
        name
        email
        imageUri
        bio
        authored {
          nextToken
        }
        narrated {
          nextToken
        }
        sharedAssets {
          nextToken
        }
        sharedImageAssets {
          nextToken
        }
        sharedWithAssets {
          nextToken
        }
        sharedWithImageAssets {
          nextToken
        }
        art {
          nextToken
        }
        numAuthored
        pseudonym
        narratorPseudo
        artistPseudo
        birthdate
        isPublisher
        isNarrator
        isArtist
        topthree
        following {
          nextToken
        }
        followers {
          nextToken
        }
        Pinned {
          nextToken
        }
        Rated {
          nextToken
        }
        Finished {
          nextToken
        }
        sampleUri
        narratorText
        accents
        voice
        artistText
        artStyles
        narratorActiveAt
        artistActiveAt
        plan
        messageSent {
          nextToken
        }
        messageRec {
          nextToken
        }
        prompts {
          nextToken
        }
        savedPrompts {
          nextToken
        }
        inProgressStories {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateDocumentAsset = /* GraphQL */ `
  subscription OnUpdateDocumentAsset {
    onUpdateDocumentAsset {
      id
      type
      title
      docUri
      user {
        type
        id
        name
        email
        imageUri
        bio
        authored {
          nextToken
        }
        narrated {
          nextToken
        }
        sharedAssets {
          nextToken
        }
        sharedImageAssets {
          nextToken
        }
        sharedWithAssets {
          nextToken
        }
        sharedWithImageAssets {
          nextToken
        }
        art {
          nextToken
        }
        numAuthored
        pseudonym
        narratorPseudo
        artistPseudo
        birthdate
        isPublisher
        isNarrator
        isArtist
        topthree
        following {
          nextToken
        }
        followers {
          nextToken
        }
        Pinned {
          nextToken
        }
        Rated {
          nextToken
        }
        Finished {
          nextToken
        }
        sampleUri
        narratorText
        accents
        voice
        artistText
        artStyles
        narratorActiveAt
        artistActiveAt
        plan
        messageSent {
          nextToken
        }
        messageRec {
          nextToken
        }
        prompts {
          nextToken
        }
        savedPrompts {
          nextToken
        }
        inProgressStories {
          nextToken
        }
        createdAt
        updatedAt
      }
      userID
      sharedUserID
      sharedUser {
        type
        id
        name
        email
        imageUri
        bio
        authored {
          nextToken
        }
        narrated {
          nextToken
        }
        sharedAssets {
          nextToken
        }
        sharedImageAssets {
          nextToken
        }
        sharedWithAssets {
          nextToken
        }
        sharedWithImageAssets {
          nextToken
        }
        art {
          nextToken
        }
        numAuthored
        pseudonym
        narratorPseudo
        artistPseudo
        birthdate
        isPublisher
        isNarrator
        isArtist
        topthree
        following {
          nextToken
        }
        followers {
          nextToken
        }
        Pinned {
          nextToken
        }
        Rated {
          nextToken
        }
        Finished {
          nextToken
        }
        sampleUri
        narratorText
        accents
        voice
        artistText
        artStyles
        narratorActiveAt
        artistActiveAt
        plan
        messageSent {
          nextToken
        }
        messageRec {
          nextToken
        }
        prompts {
          nextToken
        }
        savedPrompts {
          nextToken
        }
        inProgressStories {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteDocumentAsset = /* GraphQL */ `
  subscription OnDeleteDocumentAsset {
    onDeleteDocumentAsset {
      id
      type
      title
      docUri
      user {
        type
        id
        name
        email
        imageUri
        bio
        authored {
          nextToken
        }
        narrated {
          nextToken
        }
        sharedAssets {
          nextToken
        }
        sharedImageAssets {
          nextToken
        }
        sharedWithAssets {
          nextToken
        }
        sharedWithImageAssets {
          nextToken
        }
        art {
          nextToken
        }
        numAuthored
        pseudonym
        narratorPseudo
        artistPseudo
        birthdate
        isPublisher
        isNarrator
        isArtist
        topthree
        following {
          nextToken
        }
        followers {
          nextToken
        }
        Pinned {
          nextToken
        }
        Rated {
          nextToken
        }
        Finished {
          nextToken
        }
        sampleUri
        narratorText
        accents
        voice
        artistText
        artStyles
        narratorActiveAt
        artistActiveAt
        plan
        messageSent {
          nextToken
        }
        messageRec {
          nextToken
        }
        prompts {
          nextToken
        }
        savedPrompts {
          nextToken
        }
        inProgressStories {
          nextToken
        }
        createdAt
        updatedAt
      }
      userID
      sharedUserID
      sharedUser {
        type
        id
        name
        email
        imageUri
        bio
        authored {
          nextToken
        }
        narrated {
          nextToken
        }
        sharedAssets {
          nextToken
        }
        sharedImageAssets {
          nextToken
        }
        sharedWithAssets {
          nextToken
        }
        sharedWithImageAssets {
          nextToken
        }
        art {
          nextToken
        }
        numAuthored
        pseudonym
        narratorPseudo
        artistPseudo
        birthdate
        isPublisher
        isNarrator
        isArtist
        topthree
        following {
          nextToken
        }
        followers {
          nextToken
        }
        Pinned {
          nextToken
        }
        Rated {
          nextToken
        }
        Finished {
          nextToken
        }
        sampleUri
        narratorText
        accents
        voice
        artistText
        artStyles
        narratorActiveAt
        artistActiveAt
        plan
        messageSent {
          nextToken
        }
        messageRec {
          nextToken
        }
        prompts {
          nextToken
        }
        savedPrompts {
          nextToken
        }
        inProgressStories {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateAudioAsset = /* GraphQL */ `
  subscription OnCreateAudioAsset {
    onCreateAudioAsset {
      id
      type
      title
      audioUri
      time
      isSample
      user {
        type
        id
        name
        email
        imageUri
        bio
        authored {
          nextToken
        }
        narrated {
          nextToken
        }
        sharedAssets {
          nextToken
        }
        sharedImageAssets {
          nextToken
        }
        sharedWithAssets {
          nextToken
        }
        sharedWithImageAssets {
          nextToken
        }
        art {
          nextToken
        }
        numAuthored
        pseudonym
        narratorPseudo
        artistPseudo
        birthdate
        isPublisher
        isNarrator
        isArtist
        topthree
        following {
          nextToken
        }
        followers {
          nextToken
        }
        Pinned {
          nextToken
        }
        Rated {
          nextToken
        }
        Finished {
          nextToken
        }
        sampleUri
        narratorText
        accents
        voice
        artistText
        artStyles
        narratorActiveAt
        artistActiveAt
        plan
        messageSent {
          nextToken
        }
        messageRec {
          nextToken
        }
        prompts {
          nextToken
        }
        savedPrompts {
          nextToken
        }
        inProgressStories {
          nextToken
        }
        createdAt
        updatedAt
      }
      userID
      sharedUserID
      sharedUser {
        type
        id
        name
        email
        imageUri
        bio
        authored {
          nextToken
        }
        narrated {
          nextToken
        }
        sharedAssets {
          nextToken
        }
        sharedImageAssets {
          nextToken
        }
        sharedWithAssets {
          nextToken
        }
        sharedWithImageAssets {
          nextToken
        }
        art {
          nextToken
        }
        numAuthored
        pseudonym
        narratorPseudo
        artistPseudo
        birthdate
        isPublisher
        isNarrator
        isArtist
        topthree
        following {
          nextToken
        }
        followers {
          nextToken
        }
        Pinned {
          nextToken
        }
        Rated {
          nextToken
        }
        Finished {
          nextToken
        }
        sampleUri
        narratorText
        accents
        voice
        artistText
        artStyles
        narratorActiveAt
        artistActiveAt
        plan
        messageSent {
          nextToken
        }
        messageRec {
          nextToken
        }
        prompts {
          nextToken
        }
        savedPrompts {
          nextToken
        }
        inProgressStories {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateAudioAsset = /* GraphQL */ `
  subscription OnUpdateAudioAsset {
    onUpdateAudioAsset {
      id
      type
      title
      audioUri
      time
      isSample
      user {
        type
        id
        name
        email
        imageUri
        bio
        authored {
          nextToken
        }
        narrated {
          nextToken
        }
        sharedAssets {
          nextToken
        }
        sharedImageAssets {
          nextToken
        }
        sharedWithAssets {
          nextToken
        }
        sharedWithImageAssets {
          nextToken
        }
        art {
          nextToken
        }
        numAuthored
        pseudonym
        narratorPseudo
        artistPseudo
        birthdate
        isPublisher
        isNarrator
        isArtist
        topthree
        following {
          nextToken
        }
        followers {
          nextToken
        }
        Pinned {
          nextToken
        }
        Rated {
          nextToken
        }
        Finished {
          nextToken
        }
        sampleUri
        narratorText
        accents
        voice
        artistText
        artStyles
        narratorActiveAt
        artistActiveAt
        plan
        messageSent {
          nextToken
        }
        messageRec {
          nextToken
        }
        prompts {
          nextToken
        }
        savedPrompts {
          nextToken
        }
        inProgressStories {
          nextToken
        }
        createdAt
        updatedAt
      }
      userID
      sharedUserID
      sharedUser {
        type
        id
        name
        email
        imageUri
        bio
        authored {
          nextToken
        }
        narrated {
          nextToken
        }
        sharedAssets {
          nextToken
        }
        sharedImageAssets {
          nextToken
        }
        sharedWithAssets {
          nextToken
        }
        sharedWithImageAssets {
          nextToken
        }
        art {
          nextToken
        }
        numAuthored
        pseudonym
        narratorPseudo
        artistPseudo
        birthdate
        isPublisher
        isNarrator
        isArtist
        topthree
        following {
          nextToken
        }
        followers {
          nextToken
        }
        Pinned {
          nextToken
        }
        Rated {
          nextToken
        }
        Finished {
          nextToken
        }
        sampleUri
        narratorText
        accents
        voice
        artistText
        artStyles
        narratorActiveAt
        artistActiveAt
        plan
        messageSent {
          nextToken
        }
        messageRec {
          nextToken
        }
        prompts {
          nextToken
        }
        savedPrompts {
          nextToken
        }
        inProgressStories {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteAudioAsset = /* GraphQL */ `
  subscription OnDeleteAudioAsset {
    onDeleteAudioAsset {
      id
      type
      title
      audioUri
      time
      isSample
      user {
        type
        id
        name
        email
        imageUri
        bio
        authored {
          nextToken
        }
        narrated {
          nextToken
        }
        sharedAssets {
          nextToken
        }
        sharedImageAssets {
          nextToken
        }
        sharedWithAssets {
          nextToken
        }
        sharedWithImageAssets {
          nextToken
        }
        art {
          nextToken
        }
        numAuthored
        pseudonym
        narratorPseudo
        artistPseudo
        birthdate
        isPublisher
        isNarrator
        isArtist
        topthree
        following {
          nextToken
        }
        followers {
          nextToken
        }
        Pinned {
          nextToken
        }
        Rated {
          nextToken
        }
        Finished {
          nextToken
        }
        sampleUri
        narratorText
        accents
        voice
        artistText
        artStyles
        narratorActiveAt
        artistActiveAt
        plan
        messageSent {
          nextToken
        }
        messageRec {
          nextToken
        }
        prompts {
          nextToken
        }
        savedPrompts {
          nextToken
        }
        inProgressStories {
          nextToken
        }
        createdAt
        updatedAt
      }
      userID
      sharedUserID
      sharedUser {
        type
        id
        name
        email
        imageUri
        bio
        authored {
          nextToken
        }
        narrated {
          nextToken
        }
        sharedAssets {
          nextToken
        }
        sharedImageAssets {
          nextToken
        }
        sharedWithAssets {
          nextToken
        }
        sharedWithImageAssets {
          nextToken
        }
        art {
          nextToken
        }
        numAuthored
        pseudonym
        narratorPseudo
        artistPseudo
        birthdate
        isPublisher
        isNarrator
        isArtist
        topthree
        following {
          nextToken
        }
        followers {
          nextToken
        }
        Pinned {
          nextToken
        }
        Rated {
          nextToken
        }
        Finished {
          nextToken
        }
        sampleUri
        narratorText
        accents
        voice
        artistText
        artStyles
        narratorActiveAt
        artistActiveAt
        plan
        messageSent {
          nextToken
        }
        messageRec {
          nextToken
        }
        prompts {
          nextToken
        }
        savedPrompts {
          nextToken
        }
        inProgressStories {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateFlag = /* GraphQL */ `
  subscription OnCreateFlag {
    onCreateFlag {
      id
      type
      storyID
      story {
        id
        type
        title
        imageUri
        audioUri
        user {
          type
          id
          name
          email
          imageUri
          bio
          numAuthored
          pseudonym
          narratorPseudo
          artistPseudo
          birthdate
          isPublisher
          isNarrator
          isArtist
          topthree
          sampleUri
          narratorText
          accents
          voice
          artistText
          artStyles
          narratorActiveAt
          artistActiveAt
          plan
          createdAt
          updatedAt
        }
        userID
        author
        authorID
        narrator
        narratorUser {
          type
          id
          name
          email
          imageUri
          bio
          numAuthored
          pseudonym
          narratorPseudo
          artistPseudo
          birthdate
          isPublisher
          isNarrator
          isArtist
          topthree
          sampleUri
          narratorText
          accents
          voice
          artistText
          artStyles
          narratorActiveAt
          artistActiveAt
          plan
          createdAt
          updatedAt
        }
        narratorID
        artistName
        artist {
          type
          id
          name
          email
          imageUri
          bio
          numAuthored
          pseudonym
          narratorPseudo
          artistPseudo
          birthdate
          isPublisher
          isNarrator
          isArtist
          topthree
          sampleUri
          narratorText
          accents
          voice
          artistText
          artStyles
          narratorActiveAt
          artistActiveAt
          plan
          createdAt
          updatedAt
        }
        artistID
        time
        summary
        description
        nsfw
        comments {
          nextToken
        }
        tags {
          nextToken
        }
        ratingAvg
        ratingAmt
        rated {
          nextToken
        }
        genreID
        genre {
          id
          genre
          icon
          PrimaryColor
          SecondaryColor
          imageUri
          createdAt
          updatedAt
        }
        hidden
        approved
        createdAt
        updatedAt
        numListens
        flag {
          nextToken
        }
        promptID
        prompt {
          id
          type
          userID
          prompt
          nsfw
          createdAt
          updatedAt
          count
          upvote
          approved
        }
      }
      flagTypes
      user {
        type
        id
        name
        email
        imageUri
        bio
        authored {
          nextToken
        }
        narrated {
          nextToken
        }
        sharedAssets {
          nextToken
        }
        sharedImageAssets {
          nextToken
        }
        sharedWithAssets {
          nextToken
        }
        sharedWithImageAssets {
          nextToken
        }
        art {
          nextToken
        }
        numAuthored
        pseudonym
        narratorPseudo
        artistPseudo
        birthdate
        isPublisher
        isNarrator
        isArtist
        topthree
        following {
          nextToken
        }
        followers {
          nextToken
        }
        Pinned {
          nextToken
        }
        Rated {
          nextToken
        }
        Finished {
          nextToken
        }
        sampleUri
        narratorText
        accents
        voice
        artistText
        artStyles
        narratorActiveAt
        artistActiveAt
        plan
        messageSent {
          nextToken
        }
        messageRec {
          nextToken
        }
        prompts {
          nextToken
        }
        savedPrompts {
          nextToken
        }
        inProgressStories {
          nextToken
        }
        createdAt
        updatedAt
      }
      userID
      Status
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateFlag = /* GraphQL */ `
  subscription OnUpdateFlag {
    onUpdateFlag {
      id
      type
      storyID
      story {
        id
        type
        title
        imageUri
        audioUri
        user {
          type
          id
          name
          email
          imageUri
          bio
          numAuthored
          pseudonym
          narratorPseudo
          artistPseudo
          birthdate
          isPublisher
          isNarrator
          isArtist
          topthree
          sampleUri
          narratorText
          accents
          voice
          artistText
          artStyles
          narratorActiveAt
          artistActiveAt
          plan
          createdAt
          updatedAt
        }
        userID
        author
        authorID
        narrator
        narratorUser {
          type
          id
          name
          email
          imageUri
          bio
          numAuthored
          pseudonym
          narratorPseudo
          artistPseudo
          birthdate
          isPublisher
          isNarrator
          isArtist
          topthree
          sampleUri
          narratorText
          accents
          voice
          artistText
          artStyles
          narratorActiveAt
          artistActiveAt
          plan
          createdAt
          updatedAt
        }
        narratorID
        artistName
        artist {
          type
          id
          name
          email
          imageUri
          bio
          numAuthored
          pseudonym
          narratorPseudo
          artistPseudo
          birthdate
          isPublisher
          isNarrator
          isArtist
          topthree
          sampleUri
          narratorText
          accents
          voice
          artistText
          artStyles
          narratorActiveAt
          artistActiveAt
          plan
          createdAt
          updatedAt
        }
        artistID
        time
        summary
        description
        nsfw
        comments {
          nextToken
        }
        tags {
          nextToken
        }
        ratingAvg
        ratingAmt
        rated {
          nextToken
        }
        genreID
        genre {
          id
          genre
          icon
          PrimaryColor
          SecondaryColor
          imageUri
          createdAt
          updatedAt
        }
        hidden
        approved
        createdAt
        updatedAt
        numListens
        flag {
          nextToken
        }
        promptID
        prompt {
          id
          type
          userID
          prompt
          nsfw
          createdAt
          updatedAt
          count
          upvote
          approved
        }
      }
      flagTypes
      user {
        type
        id
        name
        email
        imageUri
        bio
        authored {
          nextToken
        }
        narrated {
          nextToken
        }
        sharedAssets {
          nextToken
        }
        sharedImageAssets {
          nextToken
        }
        sharedWithAssets {
          nextToken
        }
        sharedWithImageAssets {
          nextToken
        }
        art {
          nextToken
        }
        numAuthored
        pseudonym
        narratorPseudo
        artistPseudo
        birthdate
        isPublisher
        isNarrator
        isArtist
        topthree
        following {
          nextToken
        }
        followers {
          nextToken
        }
        Pinned {
          nextToken
        }
        Rated {
          nextToken
        }
        Finished {
          nextToken
        }
        sampleUri
        narratorText
        accents
        voice
        artistText
        artStyles
        narratorActiveAt
        artistActiveAt
        plan
        messageSent {
          nextToken
        }
        messageRec {
          nextToken
        }
        prompts {
          nextToken
        }
        savedPrompts {
          nextToken
        }
        inProgressStories {
          nextToken
        }
        createdAt
        updatedAt
      }
      userID
      Status
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteFlag = /* GraphQL */ `
  subscription OnDeleteFlag {
    onDeleteFlag {
      id
      type
      storyID
      story {
        id
        type
        title
        imageUri
        audioUri
        user {
          type
          id
          name
          email
          imageUri
          bio
          numAuthored
          pseudonym
          narratorPseudo
          artistPseudo
          birthdate
          isPublisher
          isNarrator
          isArtist
          topthree
          sampleUri
          narratorText
          accents
          voice
          artistText
          artStyles
          narratorActiveAt
          artistActiveAt
          plan
          createdAt
          updatedAt
        }
        userID
        author
        authorID
        narrator
        narratorUser {
          type
          id
          name
          email
          imageUri
          bio
          numAuthored
          pseudonym
          narratorPseudo
          artistPseudo
          birthdate
          isPublisher
          isNarrator
          isArtist
          topthree
          sampleUri
          narratorText
          accents
          voice
          artistText
          artStyles
          narratorActiveAt
          artistActiveAt
          plan
          createdAt
          updatedAt
        }
        narratorID
        artistName
        artist {
          type
          id
          name
          email
          imageUri
          bio
          numAuthored
          pseudonym
          narratorPseudo
          artistPseudo
          birthdate
          isPublisher
          isNarrator
          isArtist
          topthree
          sampleUri
          narratorText
          accents
          voice
          artistText
          artStyles
          narratorActiveAt
          artistActiveAt
          plan
          createdAt
          updatedAt
        }
        artistID
        time
        summary
        description
        nsfw
        comments {
          nextToken
        }
        tags {
          nextToken
        }
        ratingAvg
        ratingAmt
        rated {
          nextToken
        }
        genreID
        genre {
          id
          genre
          icon
          PrimaryColor
          SecondaryColor
          imageUri
          createdAt
          updatedAt
        }
        hidden
        approved
        createdAt
        updatedAt
        numListens
        flag {
          nextToken
        }
        promptID
        prompt {
          id
          type
          userID
          prompt
          nsfw
          createdAt
          updatedAt
          count
          upvote
          approved
        }
      }
      flagTypes
      user {
        type
        id
        name
        email
        imageUri
        bio
        authored {
          nextToken
        }
        narrated {
          nextToken
        }
        sharedAssets {
          nextToken
        }
        sharedImageAssets {
          nextToken
        }
        sharedWithAssets {
          nextToken
        }
        sharedWithImageAssets {
          nextToken
        }
        art {
          nextToken
        }
        numAuthored
        pseudonym
        narratorPseudo
        artistPseudo
        birthdate
        isPublisher
        isNarrator
        isArtist
        topthree
        following {
          nextToken
        }
        followers {
          nextToken
        }
        Pinned {
          nextToken
        }
        Rated {
          nextToken
        }
        Finished {
          nextToken
        }
        sampleUri
        narratorText
        accents
        voice
        artistText
        artStyles
        narratorActiveAt
        artistActiveAt
        plan
        messageSent {
          nextToken
        }
        messageRec {
          nextToken
        }
        prompts {
          nextToken
        }
        savedPrompts {
          nextToken
        }
        inProgressStories {
          nextToken
        }
        createdAt
        updatedAt
      }
      userID
      Status
      createdAt
      updatedAt
    }
  }
`;
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
      id
      type
      storyID
      story {
        id
        type
        title
        imageUri
        audioUri
        user {
          type
          id
          name
          email
          imageUri
          bio
          numAuthored
          pseudonym
          narratorPseudo
          artistPseudo
          birthdate
          isPublisher
          isNarrator
          isArtist
          topthree
          sampleUri
          narratorText
          accents
          voice
          artistText
          artStyles
          narratorActiveAt
          artistActiveAt
          plan
          createdAt
          updatedAt
        }
        userID
        author
        authorID
        narrator
        narratorUser {
          type
          id
          name
          email
          imageUri
          bio
          numAuthored
          pseudonym
          narratorPseudo
          artistPseudo
          birthdate
          isPublisher
          isNarrator
          isArtist
          topthree
          sampleUri
          narratorText
          accents
          voice
          artistText
          artStyles
          narratorActiveAt
          artistActiveAt
          plan
          createdAt
          updatedAt
        }
        narratorID
        artistName
        artist {
          type
          id
          name
          email
          imageUri
          bio
          numAuthored
          pseudonym
          narratorPseudo
          artistPseudo
          birthdate
          isPublisher
          isNarrator
          isArtist
          topthree
          sampleUri
          narratorText
          accents
          voice
          artistText
          artStyles
          narratorActiveAt
          artistActiveAt
          plan
          createdAt
          updatedAt
        }
        artistID
        time
        summary
        description
        nsfw
        comments {
          nextToken
        }
        tags {
          nextToken
        }
        ratingAvg
        ratingAmt
        rated {
          nextToken
        }
        genreID
        genre {
          id
          genre
          icon
          PrimaryColor
          SecondaryColor
          imageUri
          createdAt
          updatedAt
        }
        hidden
        approved
        createdAt
        updatedAt
        numListens
        flag {
          nextToken
        }
        promptID
        prompt {
          id
          type
          userID
          prompt
          nsfw
          createdAt
          updatedAt
          count
          upvote
          approved
        }
      }
      content
      user {
        type
        id
        name
        email
        imageUri
        bio
        authored {
          nextToken
        }
        narrated {
          nextToken
        }
        sharedAssets {
          nextToken
        }
        sharedImageAssets {
          nextToken
        }
        sharedWithAssets {
          nextToken
        }
        sharedWithImageAssets {
          nextToken
        }
        art {
          nextToken
        }
        numAuthored
        pseudonym
        narratorPseudo
        artistPseudo
        birthdate
        isPublisher
        isNarrator
        isArtist
        topthree
        following {
          nextToken
        }
        followers {
          nextToken
        }
        Pinned {
          nextToken
        }
        Rated {
          nextToken
        }
        Finished {
          nextToken
        }
        sampleUri
        narratorText
        accents
        voice
        artistText
        artStyles
        narratorActiveAt
        artistActiveAt
        plan
        messageSent {
          nextToken
        }
        messageRec {
          nextToken
        }
        prompts {
          nextToken
        }
        savedPrompts {
          nextToken
        }
        inProgressStories {
          nextToken
        }
        createdAt
        updatedAt
      }
      userID
      createdAt
      approved
      updatedAt
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
      id
      type
      storyID
      story {
        id
        type
        title
        imageUri
        audioUri
        user {
          type
          id
          name
          email
          imageUri
          bio
          numAuthored
          pseudonym
          narratorPseudo
          artistPseudo
          birthdate
          isPublisher
          isNarrator
          isArtist
          topthree
          sampleUri
          narratorText
          accents
          voice
          artistText
          artStyles
          narratorActiveAt
          artistActiveAt
          plan
          createdAt
          updatedAt
        }
        userID
        author
        authorID
        narrator
        narratorUser {
          type
          id
          name
          email
          imageUri
          bio
          numAuthored
          pseudonym
          narratorPseudo
          artistPseudo
          birthdate
          isPublisher
          isNarrator
          isArtist
          topthree
          sampleUri
          narratorText
          accents
          voice
          artistText
          artStyles
          narratorActiveAt
          artistActiveAt
          plan
          createdAt
          updatedAt
        }
        narratorID
        artistName
        artist {
          type
          id
          name
          email
          imageUri
          bio
          numAuthored
          pseudonym
          narratorPseudo
          artistPseudo
          birthdate
          isPublisher
          isNarrator
          isArtist
          topthree
          sampleUri
          narratorText
          accents
          voice
          artistText
          artStyles
          narratorActiveAt
          artistActiveAt
          plan
          createdAt
          updatedAt
        }
        artistID
        time
        summary
        description
        nsfw
        comments {
          nextToken
        }
        tags {
          nextToken
        }
        ratingAvg
        ratingAmt
        rated {
          nextToken
        }
        genreID
        genre {
          id
          genre
          icon
          PrimaryColor
          SecondaryColor
          imageUri
          createdAt
          updatedAt
        }
        hidden
        approved
        createdAt
        updatedAt
        numListens
        flag {
          nextToken
        }
        promptID
        prompt {
          id
          type
          userID
          prompt
          nsfw
          createdAt
          updatedAt
          count
          upvote
          approved
        }
      }
      content
      user {
        type
        id
        name
        email
        imageUri
        bio
        authored {
          nextToken
        }
        narrated {
          nextToken
        }
        sharedAssets {
          nextToken
        }
        sharedImageAssets {
          nextToken
        }
        sharedWithAssets {
          nextToken
        }
        sharedWithImageAssets {
          nextToken
        }
        art {
          nextToken
        }
        numAuthored
        pseudonym
        narratorPseudo
        artistPseudo
        birthdate
        isPublisher
        isNarrator
        isArtist
        topthree
        following {
          nextToken
        }
        followers {
          nextToken
        }
        Pinned {
          nextToken
        }
        Rated {
          nextToken
        }
        Finished {
          nextToken
        }
        sampleUri
        narratorText
        accents
        voice
        artistText
        artStyles
        narratorActiveAt
        artistActiveAt
        plan
        messageSent {
          nextToken
        }
        messageRec {
          nextToken
        }
        prompts {
          nextToken
        }
        savedPrompts {
          nextToken
        }
        inProgressStories {
          nextToken
        }
        createdAt
        updatedAt
      }
      userID
      createdAt
      approved
      updatedAt
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
      id
      type
      storyID
      story {
        id
        type
        title
        imageUri
        audioUri
        user {
          type
          id
          name
          email
          imageUri
          bio
          numAuthored
          pseudonym
          narratorPseudo
          artistPseudo
          birthdate
          isPublisher
          isNarrator
          isArtist
          topthree
          sampleUri
          narratorText
          accents
          voice
          artistText
          artStyles
          narratorActiveAt
          artistActiveAt
          plan
          createdAt
          updatedAt
        }
        userID
        author
        authorID
        narrator
        narratorUser {
          type
          id
          name
          email
          imageUri
          bio
          numAuthored
          pseudonym
          narratorPseudo
          artistPseudo
          birthdate
          isPublisher
          isNarrator
          isArtist
          topthree
          sampleUri
          narratorText
          accents
          voice
          artistText
          artStyles
          narratorActiveAt
          artistActiveAt
          plan
          createdAt
          updatedAt
        }
        narratorID
        artistName
        artist {
          type
          id
          name
          email
          imageUri
          bio
          numAuthored
          pseudonym
          narratorPseudo
          artistPseudo
          birthdate
          isPublisher
          isNarrator
          isArtist
          topthree
          sampleUri
          narratorText
          accents
          voice
          artistText
          artStyles
          narratorActiveAt
          artistActiveAt
          plan
          createdAt
          updatedAt
        }
        artistID
        time
        summary
        description
        nsfw
        comments {
          nextToken
        }
        tags {
          nextToken
        }
        ratingAvg
        ratingAmt
        rated {
          nextToken
        }
        genreID
        genre {
          id
          genre
          icon
          PrimaryColor
          SecondaryColor
          imageUri
          createdAt
          updatedAt
        }
        hidden
        approved
        createdAt
        updatedAt
        numListens
        flag {
          nextToken
        }
        promptID
        prompt {
          id
          type
          userID
          prompt
          nsfw
          createdAt
          updatedAt
          count
          upvote
          approved
        }
      }
      content
      user {
        type
        id
        name
        email
        imageUri
        bio
        authored {
          nextToken
        }
        narrated {
          nextToken
        }
        sharedAssets {
          nextToken
        }
        sharedImageAssets {
          nextToken
        }
        sharedWithAssets {
          nextToken
        }
        sharedWithImageAssets {
          nextToken
        }
        art {
          nextToken
        }
        numAuthored
        pseudonym
        narratorPseudo
        artistPseudo
        birthdate
        isPublisher
        isNarrator
        isArtist
        topthree
        following {
          nextToken
        }
        followers {
          nextToken
        }
        Pinned {
          nextToken
        }
        Rated {
          nextToken
        }
        Finished {
          nextToken
        }
        sampleUri
        narratorText
        accents
        voice
        artistText
        artStyles
        narratorActiveAt
        artistActiveAt
        plan
        messageSent {
          nextToken
        }
        messageRec {
          nextToken
        }
        prompts {
          nextToken
        }
        savedPrompts {
          nextToken
        }
        inProgressStories {
          nextToken
        }
        createdAt
        updatedAt
      }
      userID
      createdAt
      approved
      updatedAt
    }
  }
`;
export const onCreateTag = /* GraphQL */ `
  subscription OnCreateTag {
    onCreateTag {
      id
      type
      tagName
      nsfw
      genre {
        items {
          id
          genreID
          tagID
          createdAt
          updatedAt
        }
        nextToken
      }
      stories {
        items {
          id
          storyID
          tagID
          createdAt
          updatedAt
        }
        nextToken
      }
      count
      updatedAt
      createdAt
    }
  }
`;
export const onUpdateTag = /* GraphQL */ `
  subscription OnUpdateTag {
    onUpdateTag {
      id
      type
      tagName
      nsfw
      genre {
        items {
          id
          genreID
          tagID
          createdAt
          updatedAt
        }
        nextToken
      }
      stories {
        items {
          id
          storyID
          tagID
          createdAt
          updatedAt
        }
        nextToken
      }
      count
      updatedAt
      createdAt
    }
  }
`;
export const onDeleteTag = /* GraphQL */ `
  subscription OnDeleteTag {
    onDeleteTag {
      id
      type
      tagName
      nsfw
      genre {
        items {
          id
          genreID
          tagID
          createdAt
          updatedAt
        }
        nextToken
      }
      stories {
        items {
          id
          storyID
          tagID
          createdAt
          updatedAt
        }
        nextToken
      }
      count
      updatedAt
      createdAt
    }
  }
`;
export const onCreateRating = /* GraphQL */ `
  subscription OnCreateRating {
    onCreateRating {
      id
      type
      storyID
      story {
        id
        type
        title
        imageUri
        audioUri
        user {
          type
          id
          name
          email
          imageUri
          bio
          numAuthored
          pseudonym
          narratorPseudo
          artistPseudo
          birthdate
          isPublisher
          isNarrator
          isArtist
          topthree
          sampleUri
          narratorText
          accents
          voice
          artistText
          artStyles
          narratorActiveAt
          artistActiveAt
          plan
          createdAt
          updatedAt
        }
        userID
        author
        authorID
        narrator
        narratorUser {
          type
          id
          name
          email
          imageUri
          bio
          numAuthored
          pseudonym
          narratorPseudo
          artistPseudo
          birthdate
          isPublisher
          isNarrator
          isArtist
          topthree
          sampleUri
          narratorText
          accents
          voice
          artistText
          artStyles
          narratorActiveAt
          artistActiveAt
          plan
          createdAt
          updatedAt
        }
        narratorID
        artistName
        artist {
          type
          id
          name
          email
          imageUri
          bio
          numAuthored
          pseudonym
          narratorPseudo
          artistPseudo
          birthdate
          isPublisher
          isNarrator
          isArtist
          topthree
          sampleUri
          narratorText
          accents
          voice
          artistText
          artStyles
          narratorActiveAt
          artistActiveAt
          plan
          createdAt
          updatedAt
        }
        artistID
        time
        summary
        description
        nsfw
        comments {
          nextToken
        }
        tags {
          nextToken
        }
        ratingAvg
        ratingAmt
        rated {
          nextToken
        }
        genreID
        genre {
          id
          genre
          icon
          PrimaryColor
          SecondaryColor
          imageUri
          createdAt
          updatedAt
        }
        hidden
        approved
        createdAt
        updatedAt
        numListens
        flag {
          nextToken
        }
        promptID
        prompt {
          id
          type
          userID
          prompt
          nsfw
          createdAt
          updatedAt
          count
          upvote
          approved
        }
      }
      userID
      user {
        type
        id
        name
        email
        imageUri
        bio
        authored {
          nextToken
        }
        narrated {
          nextToken
        }
        sharedAssets {
          nextToken
        }
        sharedImageAssets {
          nextToken
        }
        sharedWithAssets {
          nextToken
        }
        sharedWithImageAssets {
          nextToken
        }
        art {
          nextToken
        }
        numAuthored
        pseudonym
        narratorPseudo
        artistPseudo
        birthdate
        isPublisher
        isNarrator
        isArtist
        topthree
        following {
          nextToken
        }
        followers {
          nextToken
        }
        Pinned {
          nextToken
        }
        Rated {
          nextToken
        }
        Finished {
          nextToken
        }
        sampleUri
        narratorText
        accents
        voice
        artistText
        artStyles
        narratorActiveAt
        artistActiveAt
        plan
        messageSent {
          nextToken
        }
        messageRec {
          nextToken
        }
        prompts {
          nextToken
        }
        savedPrompts {
          nextToken
        }
        inProgressStories {
          nextToken
        }
        createdAt
        updatedAt
      }
      rating
      nsfw
      genreID
      genre {
        id
        genre
        icon
        PrimaryColor
        SecondaryColor
        imageUri
        tags {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateRating = /* GraphQL */ `
  subscription OnUpdateRating {
    onUpdateRating {
      id
      type
      storyID
      story {
        id
        type
        title
        imageUri
        audioUri
        user {
          type
          id
          name
          email
          imageUri
          bio
          numAuthored
          pseudonym
          narratorPseudo
          artistPseudo
          birthdate
          isPublisher
          isNarrator
          isArtist
          topthree
          sampleUri
          narratorText
          accents
          voice
          artistText
          artStyles
          narratorActiveAt
          artistActiveAt
          plan
          createdAt
          updatedAt
        }
        userID
        author
        authorID
        narrator
        narratorUser {
          type
          id
          name
          email
          imageUri
          bio
          numAuthored
          pseudonym
          narratorPseudo
          artistPseudo
          birthdate
          isPublisher
          isNarrator
          isArtist
          topthree
          sampleUri
          narratorText
          accents
          voice
          artistText
          artStyles
          narratorActiveAt
          artistActiveAt
          plan
          createdAt
          updatedAt
        }
        narratorID
        artistName
        artist {
          type
          id
          name
          email
          imageUri
          bio
          numAuthored
          pseudonym
          narratorPseudo
          artistPseudo
          birthdate
          isPublisher
          isNarrator
          isArtist
          topthree
          sampleUri
          narratorText
          accents
          voice
          artistText
          artStyles
          narratorActiveAt
          artistActiveAt
          plan
          createdAt
          updatedAt
        }
        artistID
        time
        summary
        description
        nsfw
        comments {
          nextToken
        }
        tags {
          nextToken
        }
        ratingAvg
        ratingAmt
        rated {
          nextToken
        }
        genreID
        genre {
          id
          genre
          icon
          PrimaryColor
          SecondaryColor
          imageUri
          createdAt
          updatedAt
        }
        hidden
        approved
        createdAt
        updatedAt
        numListens
        flag {
          nextToken
        }
        promptID
        prompt {
          id
          type
          userID
          prompt
          nsfw
          createdAt
          updatedAt
          count
          upvote
          approved
        }
      }
      userID
      user {
        type
        id
        name
        email
        imageUri
        bio
        authored {
          nextToken
        }
        narrated {
          nextToken
        }
        sharedAssets {
          nextToken
        }
        sharedImageAssets {
          nextToken
        }
        sharedWithAssets {
          nextToken
        }
        sharedWithImageAssets {
          nextToken
        }
        art {
          nextToken
        }
        numAuthored
        pseudonym
        narratorPseudo
        artistPseudo
        birthdate
        isPublisher
        isNarrator
        isArtist
        topthree
        following {
          nextToken
        }
        followers {
          nextToken
        }
        Pinned {
          nextToken
        }
        Rated {
          nextToken
        }
        Finished {
          nextToken
        }
        sampleUri
        narratorText
        accents
        voice
        artistText
        artStyles
        narratorActiveAt
        artistActiveAt
        plan
        messageSent {
          nextToken
        }
        messageRec {
          nextToken
        }
        prompts {
          nextToken
        }
        savedPrompts {
          nextToken
        }
        inProgressStories {
          nextToken
        }
        createdAt
        updatedAt
      }
      rating
      nsfw
      genreID
      genre {
        id
        genre
        icon
        PrimaryColor
        SecondaryColor
        imageUri
        tags {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteRating = /* GraphQL */ `
  subscription OnDeleteRating {
    onDeleteRating {
      id
      type
      storyID
      story {
        id
        type
        title
        imageUri
        audioUri
        user {
          type
          id
          name
          email
          imageUri
          bio
          numAuthored
          pseudonym
          narratorPseudo
          artistPseudo
          birthdate
          isPublisher
          isNarrator
          isArtist
          topthree
          sampleUri
          narratorText
          accents
          voice
          artistText
          artStyles
          narratorActiveAt
          artistActiveAt
          plan
          createdAt
          updatedAt
        }
        userID
        author
        authorID
        narrator
        narratorUser {
          type
          id
          name
          email
          imageUri
          bio
          numAuthored
          pseudonym
          narratorPseudo
          artistPseudo
          birthdate
          isPublisher
          isNarrator
          isArtist
          topthree
          sampleUri
          narratorText
          accents
          voice
          artistText
          artStyles
          narratorActiveAt
          artistActiveAt
          plan
          createdAt
          updatedAt
        }
        narratorID
        artistName
        artist {
          type
          id
          name
          email
          imageUri
          bio
          numAuthored
          pseudonym
          narratorPseudo
          artistPseudo
          birthdate
          isPublisher
          isNarrator
          isArtist
          topthree
          sampleUri
          narratorText
          accents
          voice
          artistText
          artStyles
          narratorActiveAt
          artistActiveAt
          plan
          createdAt
          updatedAt
        }
        artistID
        time
        summary
        description
        nsfw
        comments {
          nextToken
        }
        tags {
          nextToken
        }
        ratingAvg
        ratingAmt
        rated {
          nextToken
        }
        genreID
        genre {
          id
          genre
          icon
          PrimaryColor
          SecondaryColor
          imageUri
          createdAt
          updatedAt
        }
        hidden
        approved
        createdAt
        updatedAt
        numListens
        flag {
          nextToken
        }
        promptID
        prompt {
          id
          type
          userID
          prompt
          nsfw
          createdAt
          updatedAt
          count
          upvote
          approved
        }
      }
      userID
      user {
        type
        id
        name
        email
        imageUri
        bio
        authored {
          nextToken
        }
        narrated {
          nextToken
        }
        sharedAssets {
          nextToken
        }
        sharedImageAssets {
          nextToken
        }
        sharedWithAssets {
          nextToken
        }
        sharedWithImageAssets {
          nextToken
        }
        art {
          nextToken
        }
        numAuthored
        pseudonym
        narratorPseudo
        artistPseudo
        birthdate
        isPublisher
        isNarrator
        isArtist
        topthree
        following {
          nextToken
        }
        followers {
          nextToken
        }
        Pinned {
          nextToken
        }
        Rated {
          nextToken
        }
        Finished {
          nextToken
        }
        sampleUri
        narratorText
        accents
        voice
        artistText
        artStyles
        narratorActiveAt
        artistActiveAt
        plan
        messageSent {
          nextToken
        }
        messageRec {
          nextToken
        }
        prompts {
          nextToken
        }
        savedPrompts {
          nextToken
        }
        inProgressStories {
          nextToken
        }
        createdAt
        updatedAt
      }
      rating
      nsfw
      genreID
      genre {
        id
        genre
        icon
        PrimaryColor
        SecondaryColor
        imageUri
        tags {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage {
    onCreateMessage {
      id
      type
      title
      subtitle
      content
      user {
        type
        id
        name
        email
        imageUri
        bio
        authored {
          nextToken
        }
        narrated {
          nextToken
        }
        sharedAssets {
          nextToken
        }
        sharedImageAssets {
          nextToken
        }
        sharedWithAssets {
          nextToken
        }
        sharedWithImageAssets {
          nextToken
        }
        art {
          nextToken
        }
        numAuthored
        pseudonym
        narratorPseudo
        artistPseudo
        birthdate
        isPublisher
        isNarrator
        isArtist
        topthree
        following {
          nextToken
        }
        followers {
          nextToken
        }
        Pinned {
          nextToken
        }
        Rated {
          nextToken
        }
        Finished {
          nextToken
        }
        sampleUri
        narratorText
        accents
        voice
        artistText
        artStyles
        narratorActiveAt
        artistActiveAt
        plan
        messageSent {
          nextToken
        }
        messageRec {
          nextToken
        }
        prompts {
          nextToken
        }
        savedPrompts {
          nextToken
        }
        inProgressStories {
          nextToken
        }
        createdAt
        updatedAt
      }
      userID
      otherUserID
      otherUser {
        type
        id
        name
        email
        imageUri
        bio
        authored {
          nextToken
        }
        narrated {
          nextToken
        }
        sharedAssets {
          nextToken
        }
        sharedImageAssets {
          nextToken
        }
        sharedWithAssets {
          nextToken
        }
        sharedWithImageAssets {
          nextToken
        }
        art {
          nextToken
        }
        numAuthored
        pseudonym
        narratorPseudo
        artistPseudo
        birthdate
        isPublisher
        isNarrator
        isArtist
        topthree
        following {
          nextToken
        }
        followers {
          nextToken
        }
        Pinned {
          nextToken
        }
        Rated {
          nextToken
        }
        Finished {
          nextToken
        }
        sampleUri
        narratorText
        accents
        voice
        artistText
        artStyles
        narratorActiveAt
        artistActiveAt
        plan
        messageSent {
          nextToken
        }
        messageRec {
          nextToken
        }
        prompts {
          nextToken
        }
        savedPrompts {
          nextToken
        }
        inProgressStories {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      isReadbyUser
      isReadByOtherUser
      replies {
        items {
          id
          type
          content
          createdAt
          isRead
          messageID
          userID
          updatedAt
        }
        nextToken
      }
      request
      docID
      doc {
        id
        type
        title
        docUri
        user {
          type
          id
          name
          email
          imageUri
          bio
          numAuthored
          pseudonym
          narratorPseudo
          artistPseudo
          birthdate
          isPublisher
          isNarrator
          isArtist
          topthree
          sampleUri
          narratorText
          accents
          voice
          artistText
          artStyles
          narratorActiveAt
          artistActiveAt
          plan
          createdAt
          updatedAt
        }
        userID
        sharedUserID
        sharedUser {
          type
          id
          name
          email
          imageUri
          bio
          numAuthored
          pseudonym
          narratorPseudo
          artistPseudo
          birthdate
          isPublisher
          isNarrator
          isArtist
          topthree
          sampleUri
          narratorText
          accents
          voice
          artistText
          artStyles
          narratorActiveAt
          artistActiveAt
          plan
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      updatedAt
      status
    }
  }
`;
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage {
    onUpdateMessage {
      id
      type
      title
      subtitle
      content
      user {
        type
        id
        name
        email
        imageUri
        bio
        authored {
          nextToken
        }
        narrated {
          nextToken
        }
        sharedAssets {
          nextToken
        }
        sharedImageAssets {
          nextToken
        }
        sharedWithAssets {
          nextToken
        }
        sharedWithImageAssets {
          nextToken
        }
        art {
          nextToken
        }
        numAuthored
        pseudonym
        narratorPseudo
        artistPseudo
        birthdate
        isPublisher
        isNarrator
        isArtist
        topthree
        following {
          nextToken
        }
        followers {
          nextToken
        }
        Pinned {
          nextToken
        }
        Rated {
          nextToken
        }
        Finished {
          nextToken
        }
        sampleUri
        narratorText
        accents
        voice
        artistText
        artStyles
        narratorActiveAt
        artistActiveAt
        plan
        messageSent {
          nextToken
        }
        messageRec {
          nextToken
        }
        prompts {
          nextToken
        }
        savedPrompts {
          nextToken
        }
        inProgressStories {
          nextToken
        }
        createdAt
        updatedAt
      }
      userID
      otherUserID
      otherUser {
        type
        id
        name
        email
        imageUri
        bio
        authored {
          nextToken
        }
        narrated {
          nextToken
        }
        sharedAssets {
          nextToken
        }
        sharedImageAssets {
          nextToken
        }
        sharedWithAssets {
          nextToken
        }
        sharedWithImageAssets {
          nextToken
        }
        art {
          nextToken
        }
        numAuthored
        pseudonym
        narratorPseudo
        artistPseudo
        birthdate
        isPublisher
        isNarrator
        isArtist
        topthree
        following {
          nextToken
        }
        followers {
          nextToken
        }
        Pinned {
          nextToken
        }
        Rated {
          nextToken
        }
        Finished {
          nextToken
        }
        sampleUri
        narratorText
        accents
        voice
        artistText
        artStyles
        narratorActiveAt
        artistActiveAt
        plan
        messageSent {
          nextToken
        }
        messageRec {
          nextToken
        }
        prompts {
          nextToken
        }
        savedPrompts {
          nextToken
        }
        inProgressStories {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      isReadbyUser
      isReadByOtherUser
      replies {
        items {
          id
          type
          content
          createdAt
          isRead
          messageID
          userID
          updatedAt
        }
        nextToken
      }
      request
      docID
      doc {
        id
        type
        title
        docUri
        user {
          type
          id
          name
          email
          imageUri
          bio
          numAuthored
          pseudonym
          narratorPseudo
          artistPseudo
          birthdate
          isPublisher
          isNarrator
          isArtist
          topthree
          sampleUri
          narratorText
          accents
          voice
          artistText
          artStyles
          narratorActiveAt
          artistActiveAt
          plan
          createdAt
          updatedAt
        }
        userID
        sharedUserID
        sharedUser {
          type
          id
          name
          email
          imageUri
          bio
          numAuthored
          pseudonym
          narratorPseudo
          artistPseudo
          birthdate
          isPublisher
          isNarrator
          isArtist
          topthree
          sampleUri
          narratorText
          accents
          voice
          artistText
          artStyles
          narratorActiveAt
          artistActiveAt
          plan
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      updatedAt
      status
    }
  }
`;
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage {
    onDeleteMessage {
      id
      type
      title
      subtitle
      content
      user {
        type
        id
        name
        email
        imageUri
        bio
        authored {
          nextToken
        }
        narrated {
          nextToken
        }
        sharedAssets {
          nextToken
        }
        sharedImageAssets {
          nextToken
        }
        sharedWithAssets {
          nextToken
        }
        sharedWithImageAssets {
          nextToken
        }
        art {
          nextToken
        }
        numAuthored
        pseudonym
        narratorPseudo
        artistPseudo
        birthdate
        isPublisher
        isNarrator
        isArtist
        topthree
        following {
          nextToken
        }
        followers {
          nextToken
        }
        Pinned {
          nextToken
        }
        Rated {
          nextToken
        }
        Finished {
          nextToken
        }
        sampleUri
        narratorText
        accents
        voice
        artistText
        artStyles
        narratorActiveAt
        artistActiveAt
        plan
        messageSent {
          nextToken
        }
        messageRec {
          nextToken
        }
        prompts {
          nextToken
        }
        savedPrompts {
          nextToken
        }
        inProgressStories {
          nextToken
        }
        createdAt
        updatedAt
      }
      userID
      otherUserID
      otherUser {
        type
        id
        name
        email
        imageUri
        bio
        authored {
          nextToken
        }
        narrated {
          nextToken
        }
        sharedAssets {
          nextToken
        }
        sharedImageAssets {
          nextToken
        }
        sharedWithAssets {
          nextToken
        }
        sharedWithImageAssets {
          nextToken
        }
        art {
          nextToken
        }
        numAuthored
        pseudonym
        narratorPseudo
        artistPseudo
        birthdate
        isPublisher
        isNarrator
        isArtist
        topthree
        following {
          nextToken
        }
        followers {
          nextToken
        }
        Pinned {
          nextToken
        }
        Rated {
          nextToken
        }
        Finished {
          nextToken
        }
        sampleUri
        narratorText
        accents
        voice
        artistText
        artStyles
        narratorActiveAt
        artistActiveAt
        plan
        messageSent {
          nextToken
        }
        messageRec {
          nextToken
        }
        prompts {
          nextToken
        }
        savedPrompts {
          nextToken
        }
        inProgressStories {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      isReadbyUser
      isReadByOtherUser
      replies {
        items {
          id
          type
          content
          createdAt
          isRead
          messageID
          userID
          updatedAt
        }
        nextToken
      }
      request
      docID
      doc {
        id
        type
        title
        docUri
        user {
          type
          id
          name
          email
          imageUri
          bio
          numAuthored
          pseudonym
          narratorPseudo
          artistPseudo
          birthdate
          isPublisher
          isNarrator
          isArtist
          topthree
          sampleUri
          narratorText
          accents
          voice
          artistText
          artStyles
          narratorActiveAt
          artistActiveAt
          plan
          createdAt
          updatedAt
        }
        userID
        sharedUserID
        sharedUser {
          type
          id
          name
          email
          imageUri
          bio
          numAuthored
          pseudonym
          narratorPseudo
          artistPseudo
          birthdate
          isPublisher
          isNarrator
          isArtist
          topthree
          sampleUri
          narratorText
          accents
          voice
          artistText
          artStyles
          narratorActiveAt
          artistActiveAt
          plan
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      updatedAt
      status
    }
  }
`;
export const onCreateReply = /* GraphQL */ `
  subscription OnCreateReply {
    onCreateReply {
      id
      type
      content
      createdAt
      isRead
      messageID
      message {
        id
        type
        title
        subtitle
        content
        user {
          type
          id
          name
          email
          imageUri
          bio
          numAuthored
          pseudonym
          narratorPseudo
          artistPseudo
          birthdate
          isPublisher
          isNarrator
          isArtist
          topthree
          sampleUri
          narratorText
          accents
          voice
          artistText
          artStyles
          narratorActiveAt
          artistActiveAt
          plan
          createdAt
          updatedAt
        }
        userID
        otherUserID
        otherUser {
          type
          id
          name
          email
          imageUri
          bio
          numAuthored
          pseudonym
          narratorPseudo
          artistPseudo
          birthdate
          isPublisher
          isNarrator
          isArtist
          topthree
          sampleUri
          narratorText
          accents
          voice
          artistText
          artStyles
          narratorActiveAt
          artistActiveAt
          plan
          createdAt
          updatedAt
        }
        createdAt
        isReadbyUser
        isReadByOtherUser
        replies {
          nextToken
        }
        request
        docID
        doc {
          id
          type
          title
          docUri
          userID
          sharedUserID
          createdAt
          updatedAt
        }
        updatedAt
        status
      }
      user {
        type
        id
        name
        email
        imageUri
        bio
        authored {
          nextToken
        }
        narrated {
          nextToken
        }
        sharedAssets {
          nextToken
        }
        sharedImageAssets {
          nextToken
        }
        sharedWithAssets {
          nextToken
        }
        sharedWithImageAssets {
          nextToken
        }
        art {
          nextToken
        }
        numAuthored
        pseudonym
        narratorPseudo
        artistPseudo
        birthdate
        isPublisher
        isNarrator
        isArtist
        topthree
        following {
          nextToken
        }
        followers {
          nextToken
        }
        Pinned {
          nextToken
        }
        Rated {
          nextToken
        }
        Finished {
          nextToken
        }
        sampleUri
        narratorText
        accents
        voice
        artistText
        artStyles
        narratorActiveAt
        artistActiveAt
        plan
        messageSent {
          nextToken
        }
        messageRec {
          nextToken
        }
        prompts {
          nextToken
        }
        savedPrompts {
          nextToken
        }
        inProgressStories {
          nextToken
        }
        createdAt
        updatedAt
      }
      userID
      updatedAt
    }
  }
`;
export const onUpdateReply = /* GraphQL */ `
  subscription OnUpdateReply {
    onUpdateReply {
      id
      type
      content
      createdAt
      isRead
      messageID
      message {
        id
        type
        title
        subtitle
        content
        user {
          type
          id
          name
          email
          imageUri
          bio
          numAuthored
          pseudonym
          narratorPseudo
          artistPseudo
          birthdate
          isPublisher
          isNarrator
          isArtist
          topthree
          sampleUri
          narratorText
          accents
          voice
          artistText
          artStyles
          narratorActiveAt
          artistActiveAt
          plan
          createdAt
          updatedAt
        }
        userID
        otherUserID
        otherUser {
          type
          id
          name
          email
          imageUri
          bio
          numAuthored
          pseudonym
          narratorPseudo
          artistPseudo
          birthdate
          isPublisher
          isNarrator
          isArtist
          topthree
          sampleUri
          narratorText
          accents
          voice
          artistText
          artStyles
          narratorActiveAt
          artistActiveAt
          plan
          createdAt
          updatedAt
        }
        createdAt
        isReadbyUser
        isReadByOtherUser
        replies {
          nextToken
        }
        request
        docID
        doc {
          id
          type
          title
          docUri
          userID
          sharedUserID
          createdAt
          updatedAt
        }
        updatedAt
        status
      }
      user {
        type
        id
        name
        email
        imageUri
        bio
        authored {
          nextToken
        }
        narrated {
          nextToken
        }
        sharedAssets {
          nextToken
        }
        sharedImageAssets {
          nextToken
        }
        sharedWithAssets {
          nextToken
        }
        sharedWithImageAssets {
          nextToken
        }
        art {
          nextToken
        }
        numAuthored
        pseudonym
        narratorPseudo
        artistPseudo
        birthdate
        isPublisher
        isNarrator
        isArtist
        topthree
        following {
          nextToken
        }
        followers {
          nextToken
        }
        Pinned {
          nextToken
        }
        Rated {
          nextToken
        }
        Finished {
          nextToken
        }
        sampleUri
        narratorText
        accents
        voice
        artistText
        artStyles
        narratorActiveAt
        artistActiveAt
        plan
        messageSent {
          nextToken
        }
        messageRec {
          nextToken
        }
        prompts {
          nextToken
        }
        savedPrompts {
          nextToken
        }
        inProgressStories {
          nextToken
        }
        createdAt
        updatedAt
      }
      userID
      updatedAt
    }
  }
`;
export const onDeleteReply = /* GraphQL */ `
  subscription OnDeleteReply {
    onDeleteReply {
      id
      type
      content
      createdAt
      isRead
      messageID
      message {
        id
        type
        title
        subtitle
        content
        user {
          type
          id
          name
          email
          imageUri
          bio
          numAuthored
          pseudonym
          narratorPseudo
          artistPseudo
          birthdate
          isPublisher
          isNarrator
          isArtist
          topthree
          sampleUri
          narratorText
          accents
          voice
          artistText
          artStyles
          narratorActiveAt
          artistActiveAt
          plan
          createdAt
          updatedAt
        }
        userID
        otherUserID
        otherUser {
          type
          id
          name
          email
          imageUri
          bio
          numAuthored
          pseudonym
          narratorPseudo
          artistPseudo
          birthdate
          isPublisher
          isNarrator
          isArtist
          topthree
          sampleUri
          narratorText
          accents
          voice
          artistText
          artStyles
          narratorActiveAt
          artistActiveAt
          plan
          createdAt
          updatedAt
        }
        createdAt
        isReadbyUser
        isReadByOtherUser
        replies {
          nextToken
        }
        request
        docID
        doc {
          id
          type
          title
          docUri
          userID
          sharedUserID
          createdAt
          updatedAt
        }
        updatedAt
        status
      }
      user {
        type
        id
        name
        email
        imageUri
        bio
        authored {
          nextToken
        }
        narrated {
          nextToken
        }
        sharedAssets {
          nextToken
        }
        sharedImageAssets {
          nextToken
        }
        sharedWithAssets {
          nextToken
        }
        sharedWithImageAssets {
          nextToken
        }
        art {
          nextToken
        }
        numAuthored
        pseudonym
        narratorPseudo
        artistPseudo
        birthdate
        isPublisher
        isNarrator
        isArtist
        topthree
        following {
          nextToken
        }
        followers {
          nextToken
        }
        Pinned {
          nextToken
        }
        Rated {
          nextToken
        }
        Finished {
          nextToken
        }
        sampleUri
        narratorText
        accents
        voice
        artistText
        artStyles
        narratorActiveAt
        artistActiveAt
        plan
        messageSent {
          nextToken
        }
        messageRec {
          nextToken
        }
        prompts {
          nextToken
        }
        savedPrompts {
          nextToken
        }
        inProgressStories {
          nextToken
        }
        createdAt
        updatedAt
      }
      userID
      updatedAt
    }
  }
`;
export const onCreatePrompt = /* GraphQL */ `
  subscription OnCreatePrompt {
    onCreatePrompt {
      id
      type
      stories {
        items {
          id
          type
          title
          imageUri
          audioUri
          userID
          author
          authorID
          narrator
          narratorID
          artistName
          artistID
          time
          summary
          description
          nsfw
          ratingAvg
          ratingAmt
          genreID
          hidden
          approved
          createdAt
          updatedAt
          numListens
          promptID
        }
        nextToken
      }
      userID
      user {
        type
        id
        name
        email
        imageUri
        bio
        authored {
          nextToken
        }
        narrated {
          nextToken
        }
        sharedAssets {
          nextToken
        }
        sharedImageAssets {
          nextToken
        }
        sharedWithAssets {
          nextToken
        }
        sharedWithImageAssets {
          nextToken
        }
        art {
          nextToken
        }
        numAuthored
        pseudonym
        narratorPseudo
        artistPseudo
        birthdate
        isPublisher
        isNarrator
        isArtist
        topthree
        following {
          nextToken
        }
        followers {
          nextToken
        }
        Pinned {
          nextToken
        }
        Rated {
          nextToken
        }
        Finished {
          nextToken
        }
        sampleUri
        narratorText
        accents
        voice
        artistText
        artStyles
        narratorActiveAt
        artistActiveAt
        plan
        messageSent {
          nextToken
        }
        messageRec {
          nextToken
        }
        prompts {
          nextToken
        }
        savedPrompts {
          nextToken
        }
        inProgressStories {
          nextToken
        }
        createdAt
        updatedAt
      }
      prompt
      nsfw
      createdAt
      updatedAt
      count
      upvote
      approved
    }
  }
`;
export const onUpdatePrompt = /* GraphQL */ `
  subscription OnUpdatePrompt {
    onUpdatePrompt {
      id
      type
      stories {
        items {
          id
          type
          title
          imageUri
          audioUri
          userID
          author
          authorID
          narrator
          narratorID
          artistName
          artistID
          time
          summary
          description
          nsfw
          ratingAvg
          ratingAmt
          genreID
          hidden
          approved
          createdAt
          updatedAt
          numListens
          promptID
        }
        nextToken
      }
      userID
      user {
        type
        id
        name
        email
        imageUri
        bio
        authored {
          nextToken
        }
        narrated {
          nextToken
        }
        sharedAssets {
          nextToken
        }
        sharedImageAssets {
          nextToken
        }
        sharedWithAssets {
          nextToken
        }
        sharedWithImageAssets {
          nextToken
        }
        art {
          nextToken
        }
        numAuthored
        pseudonym
        narratorPseudo
        artistPseudo
        birthdate
        isPublisher
        isNarrator
        isArtist
        topthree
        following {
          nextToken
        }
        followers {
          nextToken
        }
        Pinned {
          nextToken
        }
        Rated {
          nextToken
        }
        Finished {
          nextToken
        }
        sampleUri
        narratorText
        accents
        voice
        artistText
        artStyles
        narratorActiveAt
        artistActiveAt
        plan
        messageSent {
          nextToken
        }
        messageRec {
          nextToken
        }
        prompts {
          nextToken
        }
        savedPrompts {
          nextToken
        }
        inProgressStories {
          nextToken
        }
        createdAt
        updatedAt
      }
      prompt
      nsfw
      createdAt
      updatedAt
      count
      upvote
      approved
    }
  }
`;
export const onDeletePrompt = /* GraphQL */ `
  subscription OnDeletePrompt {
    onDeletePrompt {
      id
      type
      stories {
        items {
          id
          type
          title
          imageUri
          audioUri
          userID
          author
          authorID
          narrator
          narratorID
          artistName
          artistID
          time
          summary
          description
          nsfw
          ratingAvg
          ratingAmt
          genreID
          hidden
          approved
          createdAt
          updatedAt
          numListens
          promptID
        }
        nextToken
      }
      userID
      user {
        type
        id
        name
        email
        imageUri
        bio
        authored {
          nextToken
        }
        narrated {
          nextToken
        }
        sharedAssets {
          nextToken
        }
        sharedImageAssets {
          nextToken
        }
        sharedWithAssets {
          nextToken
        }
        sharedWithImageAssets {
          nextToken
        }
        art {
          nextToken
        }
        numAuthored
        pseudonym
        narratorPseudo
        artistPseudo
        birthdate
        isPublisher
        isNarrator
        isArtist
        topthree
        following {
          nextToken
        }
        followers {
          nextToken
        }
        Pinned {
          nextToken
        }
        Rated {
          nextToken
        }
        Finished {
          nextToken
        }
        sampleUri
        narratorText
        accents
        voice
        artistText
        artStyles
        narratorActiveAt
        artistActiveAt
        plan
        messageSent {
          nextToken
        }
        messageRec {
          nextToken
        }
        prompts {
          nextToken
        }
        savedPrompts {
          nextToken
        }
        inProgressStories {
          nextToken
        }
        createdAt
        updatedAt
      }
      prompt
      nsfw
      createdAt
      updatedAt
      count
      upvote
      approved
    }
  }
`;
export const onCreateSavedPrompt = /* GraphQL */ `
  subscription OnCreateSavedPrompt {
    onCreateSavedPrompt {
      id
      type
      userID
      user {
        type
        id
        name
        email
        imageUri
        bio
        authored {
          nextToken
        }
        narrated {
          nextToken
        }
        sharedAssets {
          nextToken
        }
        sharedImageAssets {
          nextToken
        }
        sharedWithAssets {
          nextToken
        }
        sharedWithImageAssets {
          nextToken
        }
        art {
          nextToken
        }
        numAuthored
        pseudonym
        narratorPseudo
        artistPseudo
        birthdate
        isPublisher
        isNarrator
        isArtist
        topthree
        following {
          nextToken
        }
        followers {
          nextToken
        }
        Pinned {
          nextToken
        }
        Rated {
          nextToken
        }
        Finished {
          nextToken
        }
        sampleUri
        narratorText
        accents
        voice
        artistText
        artStyles
        narratorActiveAt
        artistActiveAt
        plan
        messageSent {
          nextToken
        }
        messageRec {
          nextToken
        }
        prompts {
          nextToken
        }
        savedPrompts {
          nextToken
        }
        inProgressStories {
          nextToken
        }
        createdAt
        updatedAt
      }
      promptID
      prompt {
        id
        type
        stories {
          nextToken
        }
        userID
        user {
          type
          id
          name
          email
          imageUri
          bio
          numAuthored
          pseudonym
          narratorPseudo
          artistPseudo
          birthdate
          isPublisher
          isNarrator
          isArtist
          topthree
          sampleUri
          narratorText
          accents
          voice
          artistText
          artStyles
          narratorActiveAt
          artistActiveAt
          plan
          createdAt
          updatedAt
        }
        prompt
        nsfw
        createdAt
        updatedAt
        count
        upvote
        approved
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSavedPrompt = /* GraphQL */ `
  subscription OnUpdateSavedPrompt {
    onUpdateSavedPrompt {
      id
      type
      userID
      user {
        type
        id
        name
        email
        imageUri
        bio
        authored {
          nextToken
        }
        narrated {
          nextToken
        }
        sharedAssets {
          nextToken
        }
        sharedImageAssets {
          nextToken
        }
        sharedWithAssets {
          nextToken
        }
        sharedWithImageAssets {
          nextToken
        }
        art {
          nextToken
        }
        numAuthored
        pseudonym
        narratorPseudo
        artistPseudo
        birthdate
        isPublisher
        isNarrator
        isArtist
        topthree
        following {
          nextToken
        }
        followers {
          nextToken
        }
        Pinned {
          nextToken
        }
        Rated {
          nextToken
        }
        Finished {
          nextToken
        }
        sampleUri
        narratorText
        accents
        voice
        artistText
        artStyles
        narratorActiveAt
        artistActiveAt
        plan
        messageSent {
          nextToken
        }
        messageRec {
          nextToken
        }
        prompts {
          nextToken
        }
        savedPrompts {
          nextToken
        }
        inProgressStories {
          nextToken
        }
        createdAt
        updatedAt
      }
      promptID
      prompt {
        id
        type
        stories {
          nextToken
        }
        userID
        user {
          type
          id
          name
          email
          imageUri
          bio
          numAuthored
          pseudonym
          narratorPseudo
          artistPseudo
          birthdate
          isPublisher
          isNarrator
          isArtist
          topthree
          sampleUri
          narratorText
          accents
          voice
          artistText
          artStyles
          narratorActiveAt
          artistActiveAt
          plan
          createdAt
          updatedAt
        }
        prompt
        nsfw
        createdAt
        updatedAt
        count
        upvote
        approved
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSavedPrompt = /* GraphQL */ `
  subscription OnDeleteSavedPrompt {
    onDeleteSavedPrompt {
      id
      type
      userID
      user {
        type
        id
        name
        email
        imageUri
        bio
        authored {
          nextToken
        }
        narrated {
          nextToken
        }
        sharedAssets {
          nextToken
        }
        sharedImageAssets {
          nextToken
        }
        sharedWithAssets {
          nextToken
        }
        sharedWithImageAssets {
          nextToken
        }
        art {
          nextToken
        }
        numAuthored
        pseudonym
        narratorPseudo
        artistPseudo
        birthdate
        isPublisher
        isNarrator
        isArtist
        topthree
        following {
          nextToken
        }
        followers {
          nextToken
        }
        Pinned {
          nextToken
        }
        Rated {
          nextToken
        }
        Finished {
          nextToken
        }
        sampleUri
        narratorText
        accents
        voice
        artistText
        artStyles
        narratorActiveAt
        artistActiveAt
        plan
        messageSent {
          nextToken
        }
        messageRec {
          nextToken
        }
        prompts {
          nextToken
        }
        savedPrompts {
          nextToken
        }
        inProgressStories {
          nextToken
        }
        createdAt
        updatedAt
      }
      promptID
      prompt {
        id
        type
        stories {
          nextToken
        }
        userID
        user {
          type
          id
          name
          email
          imageUri
          bio
          numAuthored
          pseudonym
          narratorPseudo
          artistPseudo
          birthdate
          isPublisher
          isNarrator
          isArtist
          topthree
          sampleUri
          narratorText
          accents
          voice
          artistText
          artStyles
          narratorActiveAt
          artistActiveAt
          plan
          createdAt
          updatedAt
        }
        prompt
        nsfw
        createdAt
        updatedAt
        count
        upvote
        approved
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateInProgressStory = /* GraphQL */ `
  subscription OnCreateInProgressStory {
    onCreateInProgressStory {
      id
      type
      userID
      user {
        type
        id
        name
        email
        imageUri
        bio
        authored {
          nextToken
        }
        narrated {
          nextToken
        }
        sharedAssets {
          nextToken
        }
        sharedImageAssets {
          nextToken
        }
        sharedWithAssets {
          nextToken
        }
        sharedWithImageAssets {
          nextToken
        }
        art {
          nextToken
        }
        numAuthored
        pseudonym
        narratorPseudo
        artistPseudo
        birthdate
        isPublisher
        isNarrator
        isArtist
        topthree
        following {
          nextToken
        }
        followers {
          nextToken
        }
        Pinned {
          nextToken
        }
        Rated {
          nextToken
        }
        Finished {
          nextToken
        }
        sampleUri
        narratorText
        accents
        voice
        artistText
        artStyles
        narratorActiveAt
        artistActiveAt
        plan
        messageSent {
          nextToken
        }
        messageRec {
          nextToken
        }
        prompts {
          nextToken
        }
        savedPrompts {
          nextToken
        }
        inProgressStories {
          nextToken
        }
        createdAt
        updatedAt
      }
      storyID
      story {
        id
        type
        title
        imageUri
        audioUri
        user {
          type
          id
          name
          email
          imageUri
          bio
          numAuthored
          pseudonym
          narratorPseudo
          artistPseudo
          birthdate
          isPublisher
          isNarrator
          isArtist
          topthree
          sampleUri
          narratorText
          accents
          voice
          artistText
          artStyles
          narratorActiveAt
          artistActiveAt
          plan
          createdAt
          updatedAt
        }
        userID
        author
        authorID
        narrator
        narratorUser {
          type
          id
          name
          email
          imageUri
          bio
          numAuthored
          pseudonym
          narratorPseudo
          artistPseudo
          birthdate
          isPublisher
          isNarrator
          isArtist
          topthree
          sampleUri
          narratorText
          accents
          voice
          artistText
          artStyles
          narratorActiveAt
          artistActiveAt
          plan
          createdAt
          updatedAt
        }
        narratorID
        artistName
        artist {
          type
          id
          name
          email
          imageUri
          bio
          numAuthored
          pseudonym
          narratorPseudo
          artistPseudo
          birthdate
          isPublisher
          isNarrator
          isArtist
          topthree
          sampleUri
          narratorText
          accents
          voice
          artistText
          artStyles
          narratorActiveAt
          artistActiveAt
          plan
          createdAt
          updatedAt
        }
        artistID
        time
        summary
        description
        nsfw
        comments {
          nextToken
        }
        tags {
          nextToken
        }
        ratingAvg
        ratingAmt
        rated {
          nextToken
        }
        genreID
        genre {
          id
          genre
          icon
          PrimaryColor
          SecondaryColor
          imageUri
          createdAt
          updatedAt
        }
        hidden
        approved
        createdAt
        updatedAt
        numListens
        flag {
          nextToken
        }
        promptID
        prompt {
          id
          type
          userID
          prompt
          nsfw
          createdAt
          updatedAt
          count
          upvote
          approved
        }
      }
      createdAt
      updatedAt
      time
    }
  }
`;
export const onUpdateInProgressStory = /* GraphQL */ `
  subscription OnUpdateInProgressStory {
    onUpdateInProgressStory {
      id
      type
      userID
      user {
        type
        id
        name
        email
        imageUri
        bio
        authored {
          nextToken
        }
        narrated {
          nextToken
        }
        sharedAssets {
          nextToken
        }
        sharedImageAssets {
          nextToken
        }
        sharedWithAssets {
          nextToken
        }
        sharedWithImageAssets {
          nextToken
        }
        art {
          nextToken
        }
        numAuthored
        pseudonym
        narratorPseudo
        artistPseudo
        birthdate
        isPublisher
        isNarrator
        isArtist
        topthree
        following {
          nextToken
        }
        followers {
          nextToken
        }
        Pinned {
          nextToken
        }
        Rated {
          nextToken
        }
        Finished {
          nextToken
        }
        sampleUri
        narratorText
        accents
        voice
        artistText
        artStyles
        narratorActiveAt
        artistActiveAt
        plan
        messageSent {
          nextToken
        }
        messageRec {
          nextToken
        }
        prompts {
          nextToken
        }
        savedPrompts {
          nextToken
        }
        inProgressStories {
          nextToken
        }
        createdAt
        updatedAt
      }
      storyID
      story {
        id
        type
        title
        imageUri
        audioUri
        user {
          type
          id
          name
          email
          imageUri
          bio
          numAuthored
          pseudonym
          narratorPseudo
          artistPseudo
          birthdate
          isPublisher
          isNarrator
          isArtist
          topthree
          sampleUri
          narratorText
          accents
          voice
          artistText
          artStyles
          narratorActiveAt
          artistActiveAt
          plan
          createdAt
          updatedAt
        }
        userID
        author
        authorID
        narrator
        narratorUser {
          type
          id
          name
          email
          imageUri
          bio
          numAuthored
          pseudonym
          narratorPseudo
          artistPseudo
          birthdate
          isPublisher
          isNarrator
          isArtist
          topthree
          sampleUri
          narratorText
          accents
          voice
          artistText
          artStyles
          narratorActiveAt
          artistActiveAt
          plan
          createdAt
          updatedAt
        }
        narratorID
        artistName
        artist {
          type
          id
          name
          email
          imageUri
          bio
          numAuthored
          pseudonym
          narratorPseudo
          artistPseudo
          birthdate
          isPublisher
          isNarrator
          isArtist
          topthree
          sampleUri
          narratorText
          accents
          voice
          artistText
          artStyles
          narratorActiveAt
          artistActiveAt
          plan
          createdAt
          updatedAt
        }
        artistID
        time
        summary
        description
        nsfw
        comments {
          nextToken
        }
        tags {
          nextToken
        }
        ratingAvg
        ratingAmt
        rated {
          nextToken
        }
        genreID
        genre {
          id
          genre
          icon
          PrimaryColor
          SecondaryColor
          imageUri
          createdAt
          updatedAt
        }
        hidden
        approved
        createdAt
        updatedAt
        numListens
        flag {
          nextToken
        }
        promptID
        prompt {
          id
          type
          userID
          prompt
          nsfw
          createdAt
          updatedAt
          count
          upvote
          approved
        }
      }
      createdAt
      updatedAt
      time
    }
  }
`;
export const onDeleteInProgressStory = /* GraphQL */ `
  subscription OnDeleteInProgressStory {
    onDeleteInProgressStory {
      id
      type
      userID
      user {
        type
        id
        name
        email
        imageUri
        bio
        authored {
          nextToken
        }
        narrated {
          nextToken
        }
        sharedAssets {
          nextToken
        }
        sharedImageAssets {
          nextToken
        }
        sharedWithAssets {
          nextToken
        }
        sharedWithImageAssets {
          nextToken
        }
        art {
          nextToken
        }
        numAuthored
        pseudonym
        narratorPseudo
        artistPseudo
        birthdate
        isPublisher
        isNarrator
        isArtist
        topthree
        following {
          nextToken
        }
        followers {
          nextToken
        }
        Pinned {
          nextToken
        }
        Rated {
          nextToken
        }
        Finished {
          nextToken
        }
        sampleUri
        narratorText
        accents
        voice
        artistText
        artStyles
        narratorActiveAt
        artistActiveAt
        plan
        messageSent {
          nextToken
        }
        messageRec {
          nextToken
        }
        prompts {
          nextToken
        }
        savedPrompts {
          nextToken
        }
        inProgressStories {
          nextToken
        }
        createdAt
        updatedAt
      }
      storyID
      story {
        id
        type
        title
        imageUri
        audioUri
        user {
          type
          id
          name
          email
          imageUri
          bio
          numAuthored
          pseudonym
          narratorPseudo
          artistPseudo
          birthdate
          isPublisher
          isNarrator
          isArtist
          topthree
          sampleUri
          narratorText
          accents
          voice
          artistText
          artStyles
          narratorActiveAt
          artistActiveAt
          plan
          createdAt
          updatedAt
        }
        userID
        author
        authorID
        narrator
        narratorUser {
          type
          id
          name
          email
          imageUri
          bio
          numAuthored
          pseudonym
          narratorPseudo
          artistPseudo
          birthdate
          isPublisher
          isNarrator
          isArtist
          topthree
          sampleUri
          narratorText
          accents
          voice
          artistText
          artStyles
          narratorActiveAt
          artistActiveAt
          plan
          createdAt
          updatedAt
        }
        narratorID
        artistName
        artist {
          type
          id
          name
          email
          imageUri
          bio
          numAuthored
          pseudonym
          narratorPseudo
          artistPseudo
          birthdate
          isPublisher
          isNarrator
          isArtist
          topthree
          sampleUri
          narratorText
          accents
          voice
          artistText
          artStyles
          narratorActiveAt
          artistActiveAt
          plan
          createdAt
          updatedAt
        }
        artistID
        time
        summary
        description
        nsfw
        comments {
          nextToken
        }
        tags {
          nextToken
        }
        ratingAvg
        ratingAmt
        rated {
          nextToken
        }
        genreID
        genre {
          id
          genre
          icon
          PrimaryColor
          SecondaryColor
          imageUri
          createdAt
          updatedAt
        }
        hidden
        approved
        createdAt
        updatedAt
        numListens
        flag {
          nextToken
        }
        promptID
        prompt {
          id
          type
          userID
          prompt
          nsfw
          createdAt
          updatedAt
          count
          upvote
          approved
        }
      }
      createdAt
      updatedAt
      time
    }
  }
`;
export const onCreateStoryTag = /* GraphQL */ `
  subscription OnCreateStoryTag {
    onCreateStoryTag {
      id
      storyID
      tagID
      story {
        id
        type
        title
        imageUri
        audioUri
        user {
          type
          id
          name
          email
          imageUri
          bio
          numAuthored
          pseudonym
          narratorPseudo
          artistPseudo
          birthdate
          isPublisher
          isNarrator
          isArtist
          topthree
          sampleUri
          narratorText
          accents
          voice
          artistText
          artStyles
          narratorActiveAt
          artistActiveAt
          plan
          createdAt
          updatedAt
        }
        userID
        author
        authorID
        narrator
        narratorUser {
          type
          id
          name
          email
          imageUri
          bio
          numAuthored
          pseudonym
          narratorPseudo
          artistPseudo
          birthdate
          isPublisher
          isNarrator
          isArtist
          topthree
          sampleUri
          narratorText
          accents
          voice
          artistText
          artStyles
          narratorActiveAt
          artistActiveAt
          plan
          createdAt
          updatedAt
        }
        narratorID
        artistName
        artist {
          type
          id
          name
          email
          imageUri
          bio
          numAuthored
          pseudonym
          narratorPseudo
          artistPseudo
          birthdate
          isPublisher
          isNarrator
          isArtist
          topthree
          sampleUri
          narratorText
          accents
          voice
          artistText
          artStyles
          narratorActiveAt
          artistActiveAt
          plan
          createdAt
          updatedAt
        }
        artistID
        time
        summary
        description
        nsfw
        comments {
          nextToken
        }
        tags {
          nextToken
        }
        ratingAvg
        ratingAmt
        rated {
          nextToken
        }
        genreID
        genre {
          id
          genre
          icon
          PrimaryColor
          SecondaryColor
          imageUri
          createdAt
          updatedAt
        }
        hidden
        approved
        createdAt
        updatedAt
        numListens
        flag {
          nextToken
        }
        promptID
        prompt {
          id
          type
          userID
          prompt
          nsfw
          createdAt
          updatedAt
          count
          upvote
          approved
        }
      }
      tag {
        id
        type
        tagName
        nsfw
        genre {
          nextToken
        }
        stories {
          nextToken
        }
        count
        updatedAt
        createdAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateStoryTag = /* GraphQL */ `
  subscription OnUpdateStoryTag {
    onUpdateStoryTag {
      id
      storyID
      tagID
      story {
        id
        type
        title
        imageUri
        audioUri
        user {
          type
          id
          name
          email
          imageUri
          bio
          numAuthored
          pseudonym
          narratorPseudo
          artistPseudo
          birthdate
          isPublisher
          isNarrator
          isArtist
          topthree
          sampleUri
          narratorText
          accents
          voice
          artistText
          artStyles
          narratorActiveAt
          artistActiveAt
          plan
          createdAt
          updatedAt
        }
        userID
        author
        authorID
        narrator
        narratorUser {
          type
          id
          name
          email
          imageUri
          bio
          numAuthored
          pseudonym
          narratorPseudo
          artistPseudo
          birthdate
          isPublisher
          isNarrator
          isArtist
          topthree
          sampleUri
          narratorText
          accents
          voice
          artistText
          artStyles
          narratorActiveAt
          artistActiveAt
          plan
          createdAt
          updatedAt
        }
        narratorID
        artistName
        artist {
          type
          id
          name
          email
          imageUri
          bio
          numAuthored
          pseudonym
          narratorPseudo
          artistPseudo
          birthdate
          isPublisher
          isNarrator
          isArtist
          topthree
          sampleUri
          narratorText
          accents
          voice
          artistText
          artStyles
          narratorActiveAt
          artistActiveAt
          plan
          createdAt
          updatedAt
        }
        artistID
        time
        summary
        description
        nsfw
        comments {
          nextToken
        }
        tags {
          nextToken
        }
        ratingAvg
        ratingAmt
        rated {
          nextToken
        }
        genreID
        genre {
          id
          genre
          icon
          PrimaryColor
          SecondaryColor
          imageUri
          createdAt
          updatedAt
        }
        hidden
        approved
        createdAt
        updatedAt
        numListens
        flag {
          nextToken
        }
        promptID
        prompt {
          id
          type
          userID
          prompt
          nsfw
          createdAt
          updatedAt
          count
          upvote
          approved
        }
      }
      tag {
        id
        type
        tagName
        nsfw
        genre {
          nextToken
        }
        stories {
          nextToken
        }
        count
        updatedAt
        createdAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteStoryTag = /* GraphQL */ `
  subscription OnDeleteStoryTag {
    onDeleteStoryTag {
      id
      storyID
      tagID
      story {
        id
        type
        title
        imageUri
        audioUri
        user {
          type
          id
          name
          email
          imageUri
          bio
          numAuthored
          pseudonym
          narratorPseudo
          artistPseudo
          birthdate
          isPublisher
          isNarrator
          isArtist
          topthree
          sampleUri
          narratorText
          accents
          voice
          artistText
          artStyles
          narratorActiveAt
          artistActiveAt
          plan
          createdAt
          updatedAt
        }
        userID
        author
        authorID
        narrator
        narratorUser {
          type
          id
          name
          email
          imageUri
          bio
          numAuthored
          pseudonym
          narratorPseudo
          artistPseudo
          birthdate
          isPublisher
          isNarrator
          isArtist
          topthree
          sampleUri
          narratorText
          accents
          voice
          artistText
          artStyles
          narratorActiveAt
          artistActiveAt
          plan
          createdAt
          updatedAt
        }
        narratorID
        artistName
        artist {
          type
          id
          name
          email
          imageUri
          bio
          numAuthored
          pseudonym
          narratorPseudo
          artistPseudo
          birthdate
          isPublisher
          isNarrator
          isArtist
          topthree
          sampleUri
          narratorText
          accents
          voice
          artistText
          artStyles
          narratorActiveAt
          artistActiveAt
          plan
          createdAt
          updatedAt
        }
        artistID
        time
        summary
        description
        nsfw
        comments {
          nextToken
        }
        tags {
          nextToken
        }
        ratingAvg
        ratingAmt
        rated {
          nextToken
        }
        genreID
        genre {
          id
          genre
          icon
          PrimaryColor
          SecondaryColor
          imageUri
          createdAt
          updatedAt
        }
        hidden
        approved
        createdAt
        updatedAt
        numListens
        flag {
          nextToken
        }
        promptID
        prompt {
          id
          type
          userID
          prompt
          nsfw
          createdAt
          updatedAt
          count
          upvote
          approved
        }
      }
      tag {
        id
        type
        tagName
        nsfw
        genre {
          nextToken
        }
        stories {
          nextToken
        }
        count
        updatedAt
        createdAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateGenreTag = /* GraphQL */ `
  subscription OnCreateGenreTag {
    onCreateGenreTag {
      id
      genreID
      tagID
      genre {
        id
        genre
        icon
        PrimaryColor
        SecondaryColor
        imageUri
        tags {
          nextToken
        }
        createdAt
        updatedAt
      }
      tag {
        id
        type
        tagName
        nsfw
        genre {
          nextToken
        }
        stories {
          nextToken
        }
        count
        updatedAt
        createdAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateGenreTag = /* GraphQL */ `
  subscription OnUpdateGenreTag {
    onUpdateGenreTag {
      id
      genreID
      tagID
      genre {
        id
        genre
        icon
        PrimaryColor
        SecondaryColor
        imageUri
        tags {
          nextToken
        }
        createdAt
        updatedAt
      }
      tag {
        id
        type
        tagName
        nsfw
        genre {
          nextToken
        }
        stories {
          nextToken
        }
        count
        updatedAt
        createdAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteGenreTag = /* GraphQL */ `
  subscription OnDeleteGenreTag {
    onDeleteGenreTag {
      id
      genreID
      tagID
      genre {
        id
        genre
        icon
        PrimaryColor
        SecondaryColor
        imageUri
        tags {
          nextToken
        }
        createdAt
        updatedAt
      }
      tag {
        id
        type
        tagName
        nsfw
        genre {
          nextToken
        }
        stories {
          nextToken
        }
        count
        updatedAt
        createdAt
      }
      createdAt
      updatedAt
    }
  }
`;
