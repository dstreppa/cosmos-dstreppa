package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// BurningKeyPrefix is the prefix to retrieve all Burning
	BurningKeyPrefix = "Burning/value/"
)

// BurningKey returns the store key to retrieve a Burning from the index fields
func BurningKey(
	index string,
) []byte {
	var key []byte

	indexBytes := []byte(index)
	key = append(key, indexBytes...)
	key = append(key, []byte("/")...)

	return key
}
